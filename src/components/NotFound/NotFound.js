import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import close from "@iconify/icons-mdi/close-circle-outline";

import {
  StyledNotFound,
  StyledButtonNotFound,
} from "../styled/NotFound.styled";

export const NotFound = ({
  selectedEvents,
  categoryWasSelect,
  extendNavigation,
}) => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    if (extendNavigation) setHidden(true);
    if (hidden) return () => setHidden(false);
  }, [selectedEvents, extendNavigation, hidden]);
  const hiddenHandler = () => {
    setHidden(true);
  };
  return !selectedEvents.length && categoryWasSelect ? (
    <StyledNotFound hidden={hidden}>
      No events found in this category
      <StyledButtonNotFound>
        <Icon icon={close} onClick={hiddenHandler} />
      </StyledButtonNotFound>
    </StyledNotFound>
  ) : null;
};
