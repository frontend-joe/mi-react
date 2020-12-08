import React from "react";
import styled from "styled-components";
import frontendJoe from "assets/images/frontendjoe.png";
import frontendJoeLight from "assets/images/frontendjoe-light.png";
import { MatIcon } from "components/shared";

const BottomRow = styled.div`
  flex: 0 0 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  font-size: 28px;
`;

const FrontendJoe = styled.img`
  height: 40px;
`;

const StyledNumber = styled("div", { isDark: Boolean })`
  font-size: 26px;
  font-weight: ${(p) => (p.isDark ? 500 : 600)};
  color: ${({ seriesNumberColor }) =>
    seriesNumberColor || "rgba(255, 255, 255, 0.38)"};
`;

const Bottom = ({ isDark, isFirstSlide, seriesNumber, seriesNumberColor }) => (
  <BottomRow>
    <StyledNumber isDark={isDark} seriesNumberColor={seriesNumberColor}>
      {seriesNumber}
    </StyledNumber>
    {!isFirstSlide && (
      <FrontendJoe src={isDark ? frontendJoeLight : frontendJoe} />
    )}
    {isFirstSlide && <MatIcon>bookmark_outline</MatIcon>}
  </BottomRow>
);

export default Bottom;
