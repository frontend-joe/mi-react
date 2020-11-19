import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { rgba } from "polished";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const Wrapper = styled.div`
  position: relative;
  width: 222px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #fff;
  font-weight: 600;
  color: #565360;
`;

const GlobalStyle = createGlobalStyle`
  body .tippy-tooltip {
    border-radius: px;
  }
`;

const CustomTooltip = styled.div`
  color: ${rgba("#fff", 0.85)};
`;

const CustomButton = styled.button`
  cursor: pointer;
`;

const InteractiveTooltip = () => {
  const TooltipContent = (
    <CustomTooltip>
      Simple Tooltip with <CustomButton>Button</CustomButton>
    </CustomTooltip>
  );

  return (
    <>
      <GlobalStyle />
      <Tooltip html={TooltipContent} interactive position="top">
        <Wrapper>Hover Me</Wrapper>
      </Tooltip>
    </>
  );
};

export default InteractiveTooltip;
