import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import arrow from "assets/images/arrow.png";
import arrowForDark from "assets/images/arrow-fordark.png";

const StyledTop = styled("div")`
  position: relative;
  flex: 0 0 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
`;

const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${({ isDark }) => (isDark ? rgba("white", 0.38) : "#ACAAB7")};
`;

const StyledArrow = styled.img`
  width: 24px;
`;

const Top = ({ isDark }) => (
  <StyledTop>
    <StyledTitle isDark={isDark}>React</StyledTitle>
    <StyledArrow src={isDark ? arrowForDark : arrow} />
  </StyledTop>
);

export default Top;
