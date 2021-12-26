import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Icon } from "@iconify/react";
import questionMark from "@iconify/icons-mdi/question-mark-circle-outline";
import closeMarker from '@iconify/icons-mdi/close-circle-outline';
import { StyledInfoCategoriesMarker } from "../styled/Info.styled";

export const InfoCategoriesMarker = ({
  cbShowInfoCategories,
  extendNavigation,
}) => {
  const [showInfo, setShowInfo] = useState(true);
  const status = useSelector((state) => state.categories.status);

  const showInfoHandler = () => {
    setShowInfo(!showInfo);
    cbShowInfoCategories(showInfo);
  };
  return (
    <StyledInfoCategoriesMarker
      extendNavigation={extendNavigation}
      active={showInfo}
    >
      {status && <Icon icon={showInfo ? closeMarker  :questionMark} onClick={showInfoHandler} />}
    </StyledInfoCategoriesMarker>
  );
};
