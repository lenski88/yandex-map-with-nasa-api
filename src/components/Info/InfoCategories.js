import React from "react";
import { useSelector } from "react-redux";

import { StyledInfoCategories } from "../styled/Info.styled";

export const InfoCategories = ({showInfoCategories, extendNavigation}) => {
  const info = useSelector((state) => state.categories);
  return (
    <StyledInfoCategories extendNavigation={extendNavigation} isShow={showInfoCategories}>
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
