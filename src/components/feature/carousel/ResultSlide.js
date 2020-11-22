import React from "react";
import styled from "styled-components";
import { Bottom, Frame, FrameWrapper, Middle, Top } from "./shared";
import Interaction from "components/interactions/ToastifyAlert";

const StyledInteraction = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const ResultSlide = () => (
  <FrameWrapper>
    <Frame background="#100F10">
      <Top isDark />
      <Middle>
        <StyledInteraction>
          <Interaction />
        </StyledInteraction>
      </Middle>
      <Bottom
        isDark
        seriesNumber="#33"
        seriesNumberColor="rgba(255, 255, 255, 0.38)"
      />
    </Frame>
  </FrameWrapper>
);

export default ResultSlide;
