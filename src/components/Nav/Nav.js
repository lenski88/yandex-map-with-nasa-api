import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { categoriesThunkAC } from "../../redux/Categories/actions";
import { selectedEventAC } from "../../redux/Events/actions";

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
  };

  const selectEventHandler = (eo) => {
    dispatch(selectedEventAC(eo.target.innerText));
  };

  return (
    <>
      {!isMobile ? (
        <StyledNav display={categories.status ? "flex" : "none"}>
          {categories.status
            ? categories.categories.map((item) => {
                return (
                  <li key={item.id} onClick={selectEventHandler}>
                    {item.title}
                  </li>
                );
              })
            : null}
        </StyledNav>
      ) : (
        <StyledNavExtend
          extend={extendNav}
          display={categories.status ? "flex" : "none"}
        >
          <StyledOpenButton onClick={extendNavHandler}>
            {extendNav ? <>&#10005;</> : <>&#8801;</>}
          </StyledOpenButton>
          {extendNav && categories.status
            ? categories.categories.map((item) => {
                return (
                  <li key={item.id} onClick={selectEventHandler}>
                    {item.title}
                  </li>
                );
              })
            : null}
        </StyledNavExtend>
      )}
    </>
  );
};
