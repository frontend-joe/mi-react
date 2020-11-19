import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { rgba } from "polished";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 222px;
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 1rem;
  border-radius: 8px;
  background: #fff;
  outline: none;
  color: ${rgba("#565360", 0.85)};
`;

const GlobalStyle = createGlobalStyle`
  body .tippy-tooltip {
    border-radius: 5px;
  }
`;

const Gradient = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: linear-gradient(45deg, #ee0979, #ff6a00);
`;

const GradientTitle = styled.div`
  margin-left: 1rem;
  font-size: 1.175rem;
  font-weight: 600;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  color: white;
  outline: none;
  cursor: pointer;
`;

const ButtonIcon = styled.span`
  font-size: 20px;
`;

const ButtonText = styled.span`
  margin-right: 1rem;
`;

const InteractiveTooltip = ({}) => {
  const [isCopied, setCopied] = useState(false);

  const onClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3500);
  };

  const TooltipContent = (
    <Button onClick={onClick}>
      <ButtonText>Copy To Clipboard</ButtonText>
      <ButtonIcon className="material-icons">content_copy</ButtonIcon>
    </Button>
  );

  return (
    <>
      <GlobalStyle />
      <Tooltip
        hideOnClick={false}
        offset={-111}
        html={TooltipContent}
        interactive
      >
        <Wrapper>
          <Gradient />
          <GradientTitle>
            {isCopied ? "CSS Copied!" : "Ibiza Sunset"}
          </GradientTitle>
        </Wrapper>
      </Tooltip>
    </>
  );
};

export default InteractiveTooltip;
