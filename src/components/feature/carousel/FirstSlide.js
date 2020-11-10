import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Bottom, Frame, FrameWrapper, Middle, Top } from "./shared";
import joe from "assets/images/frontendjoe.png";
import joeLight from "assets/images/frontendjoe-light.png";
import collab from "assets/images/adam.png";
import Interaction from "components/interactions/TypingIndicatorExample";

const StyledBackgroundText = styled.div`
  position: absolute;
  z-index: 0;
  top: 173px;
  left: -25px;
  font-size: 180px;
  font-weight: 600;
  color: ${rgba("white", 0.05)};
  white-space: nowrap;
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 1;
  width: 45%;
  padding: 19px 28px 0;
`;

const StyledInteraction = styled.div`
  position: absolute;
  right: 92px;
  bottom: 16px;
`;

const StyledNumber = styled.div`
  color: ${rgba("#fff", 0.5)};
  font-size: 50px;
  line-height: 52px;
  letter-spacing: -1px;
  font-weight: 500;
  margin-bottom: 14px;
`;

const StyledTitle = styled.div`
  font-size: 5.25rem;
  font-weight: 500;
  line-height: 92px;
  letter-spacing: -1px;
  margin-bottom: 1.75rem;
  color: ${rgba("#fff", 0.96)};
`;

const StyledTitleLongText = styled.div`
  white-space: nowrap;
`;

const StyledImageWrapper = styled.div`
  display: inline-block;
  transform: translateX(${({ isLast }) => (isLast ? "-33px" : "0")});
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  margin-bottom: 10px;
`;

const StyledImageText = styled.div`
  font-size: 11px;
  color: ${rgba("white", 0.55)};
  padding-left: ${({ isLast }) => (isLast ? "22px" : "0px")};
`;

const FirstSlide = ({}) => (
  <FrameWrapper>
    <Frame background="#6F2ADF">
      <StyledBackgroundText>Typing</StyledBackgroundText>
      <Top isDark />
      <Middle alignItems="flex-start" justifyContent="flex-start">
        <StyledContent>
          <StyledNumber>#29</StyledNumber>
          <StyledTitle>
            The
            <br />
            <StyledTitleLongText>Typing</StyledTitleLongText>
            Indicator
          </StyledTitle>
          <div style={{ marginBottom: "4px" }}>
            <StyledImageWrapper>
              <StyledImage src={joeLight} />
              <StyledImageText>@frontendjoe</StyledImageText>
            </StyledImageWrapper>
            <StyledImageWrapper isLast>
              <StyledImage src={collab} />
              <StyledImageText isLast>@appsbyadam</StyledImageText>
            </StyledImageWrapper>
          </div>
        </StyledContent>
        <StyledInteraction>
          <Interaction color="white" />
        </StyledInteraction>
      </Middle>
      <Bottom isFirstSlide isDark seriesNumber="#29" />
    </Frame>
  </FrameWrapper>
);

export default FirstSlide;
