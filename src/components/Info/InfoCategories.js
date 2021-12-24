import React from "react";
import { useSelector } from "react-redux";

import { StyledInfoCategories } from "../styled/Info.styled";

export const InfoCategories = ({showInfoCategories}) => {
  const info = useSelector((state) => state.categories);
  return (
    <StyledInfoCategories display={showInfoCategories ? 'block' : 'none'}>
      {info.status
        ? info.categories.map((item) => {
            return (
              <p key={item.id}>
                <span>{item.title}</span>: {item.description}
              </p>
            );
          })
        : null}
    </StyledInfoCategories>
  );
};
