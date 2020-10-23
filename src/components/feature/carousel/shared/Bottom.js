import React from "react";
import styled from "styled-components";
import frontendJoe from "assets/images/frontendjoe.png";
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

const StyledNumber = styled.div`
  font-size: 26px;
  font-weight: 500;
  color: ${({ seriesNumberColor }) =>
    seriesNumberColor || "rgba(255, 255, 255, 0.38)"};
`;

const Bottom = ({ isDark, isFirstSlide, seriesNumber, seriesNumberColor }) => (
  <BottomRow>
    <StyledNumber seriesNumberColor={seriesNumberColor}>
      {seriesNumber}
    </StyledNumber>
    {!isFirstSlide && <FrontendJoe src={frontendJoe} />}
    {isFirstSlide && <MatIcon>bookmark_outline</MatIcon>}
  </BottomRow>
);

export default Bottom;
