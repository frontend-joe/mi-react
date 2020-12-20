import React from "react";
import styled from "styled-components";
import { Bottom, Frame, FrameWrapper, Middle, Top } from "./shared";
import Interaction from "components/interactions/Carousel2";

const StyledInteraction = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ResultSlide = () => (
  <FrameWrapper>
    <Frame background="#591FAE">
      <Top isDark />
      <Middle>
        <StyledInteraction>
          <Interaction />
        </StyledInteraction>
      </Middle>
      <Bottom isDark seriesNumberColor="rgba(255, 255, 255, 0.38)" />
    </Frame>
  </FrameWrapper>
);

export default ResultSlide;
