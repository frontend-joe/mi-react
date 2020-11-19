import React from "react";
import styled from "styled-components";
import { Bottom, Frame, FrameWrapper, Middle, Top } from "./shared";
import Interaction from "components/interactions/SlideUpDialog";

const StyledInteraction = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const ResultSlide = () => (
  <FrameWrapper>
    <Frame background="#702CDD">
      <Top isDark />
      <Middle>
        <StyledInteraction>
          <Interaction />
        </StyledInteraction>
      </Middle>
      <Bottom
        isDark
        seriesNumber="#32"
        seriesNumberColor="rgba(255, 255, 255, 0.38)"
      />
    </Frame>
  </FrameWrapper>
);

export default ResultSlide;
