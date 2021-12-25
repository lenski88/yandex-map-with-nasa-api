import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { categoriesThunkAC } from "../../redux/Nav/actionsNav";

import {
  StyledNav,
  StyledOpenButton,
  StyledNavExtend,
} from "../styled/Nav.styled";

export const Nav = ({ isMobile, cbExtendNav }) => {
  const [extendNav, setExtendNav] = useState(false);

  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoriesThunkAC());
  }, [dispatch]);

  const extendNavHandler = () => {
    setExtendNav((curr) => !curr);
    cbExtendNav(!extendNav);
  }

  return (
    <>
      {!isMobile ? (
        <StyledNav display={categories.status ? "flex" : "none"}>
          {categories.status
            ? categories.categories.map((item) => {
                return <li key={item.id}>{item.title}</li>;
              })
            : null}
        </StyledNav>
      ) : (
        <StyledNavExtend
          extend={extendNav}
          display={categories.status ? "flex" : "none"}
        >
          <StyledOpenButton
            onClick={extendNavHandler}
          >
            {extendNav ? <>&#10005;</> : <>&#8801;</>}
          </StyledOpenButton>
          {extendNav && categories.status
            ? categories.categories.map((item) => {
                return <li key={item.id}>{item.title}</li>;
              })
            : null}
        </StyledNavExtend>
      )}
    </>
  );
};
