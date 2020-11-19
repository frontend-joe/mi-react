import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Bottom, Frame, FrameWrapper, Middle, Top } from "./shared";
import joe from "assets/images/frontendjoe.png";
import joeLight from "assets/images/frontendjoe-light.png";
import collab from "assets/images/mike.png";
import Interaction from "components/interactions/SlideUpDialog";

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
  top: 0;
  left: 0;
  ${"" /* left: 50%;
  bottom: 184px;
  transform: translateX(-50%); */}
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
  margin-bottom: 2.75rem;
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
    <Frame background="#702CDD">
      <StyledBackgroundText>Slide Up</StyledBackgroundText>
      <Top isDark />
      <Middle alignItems="flex-start" justifyContent="flex-start">
        <StyledContent>
          <StyledNumber>#32</StyledNumber>
          <StyledTitle>
            The
            <br />
            <StyledTitleLongText>Slide Up</StyledTitleLongText>
            Dialog
          </StyledTitle>
          <div style={{ marginBottom: "4px" }}>
            <StyledImageWrapper>
              <StyledImage src={joeLight} />
              <StyledImageText>@frontendjoe</StyledImageText>
            </StyledImageWrapper>
            {false && (
              <StyledImageWrapper isLast>
                <StyledImage src={collab} />
                <StyledImageText isLast>@bydanromero</StyledImageText>
              </StyledImageWrapper>
            )}
          </div>
        </StyledContent>
        <StyledInteraction>
          <Interaction color="white" />
        </StyledInteraction>
      </Middle>
      <Bottom isFirstSlide isDark seriesNumber="#32" />
    </Frame>
  </FrameWrapper>
);

export default FirstSlide;
