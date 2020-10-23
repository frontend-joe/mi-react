import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
`;

const FrameWrapper = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);

export default FrameWrapper;
