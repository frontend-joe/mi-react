import React from "react";
import { Bottom, Frame, FrameWrapper, Middle, Top } from "./shared";
import Interaction from "components/interactions/MaskedInput";

const ResultSlide = ({}) => (
  <FrameWrapper>
    <Frame background="#1e172b">
      <Top isDark />
      <Middle>
        <Interaction color="#040404" />
      </Middle>
      <Bottom
        seriesNumber="#24"
        seriesNumberColor="rgba(255, 255, 255, 0.38)"
      />
    </Frame>
  </FrameWrapper>
);

export default ResultSlide;
