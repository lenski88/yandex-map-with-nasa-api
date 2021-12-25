import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Icon } from "@iconify/react";
import questionMark from "@iconify/icons-mdi/question-mark-circle-outline";
import { StyledInfoCategoriesMarker } from "../styled/Info.styled";

export const InfoCategoriesMarker = ({
  cbShowInfoCategories,
  extendNavigation,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const status = useSelector((state) => state.categories.status);

  const showInfoHandler = () => {
    setShowInfo(!showInfo);
    cbShowInfoCategories(showInfo);
  };
  return (
    <StyledInfoCategoriesMarker extendNavigation={extendNavigation} active={showInfo}>
      {status && <Icon icon={questionMark} onClick={showInfoHandler} />}
    </StyledInfoCategoriesMarker>
  );
};
