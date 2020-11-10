import React from "react";
import { Bottom, Frame, FrameWrapper, Middle, Top } from "./shared";
import Interaction from "components/interactions/TypingIndicator";

const ResultSlide = () => (
  <FrameWrapper>
    <Frame background="#6F2ADF">
      <Top isDark />
      <Middle>
        <Interaction />
      </Middle>
      <Bottom
        isDark
        seriesNumber="#29"
        seriesNumberColor="rgba(255, 255, 255, 0.38)"
      />
    </Frame>
  </FrameWrapper>
);

export default ResultSlide;
