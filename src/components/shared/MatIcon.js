import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

const StyledIcon = styled.i`
  color: ${rgba("white", 0.38)};
  font-size: ${({ fontSize }) => fontSize || "34px"};
`;

const MatIcon = ({ children, fontSize }) => (
  <StyledIcon className="material-icons-outlined" fontSize={fontSize}>
    {children}
  </StyledIcon>
);

export default MatIcon;
