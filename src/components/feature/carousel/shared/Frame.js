import React from "react";
import styled from "styled-components";

const StyledFrame = styled("div")`
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 750px;
  background: ${({ background }) => background || "transparent"};
  ${"" /* border: 1px solid rgba(0, 0, 0, 0); */}
  display: flex;
  flex-direction: column;
  transition: background 0.4s;
`;

const Frame = ({ children, background }) => (
  <StyledFrame background={background}>{children}</StyledFrame>
);

export default Frame;
