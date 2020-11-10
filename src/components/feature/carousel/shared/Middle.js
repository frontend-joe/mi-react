import React from "react";
import styled from "styled-components";

const StyledMiddle = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
`;

const Middle = ({ children, alignItems, justifyContent, ...rest }) => (
  <StyledMiddle
    {...rest}
    alignItems={alignItems}
    justifyContent={justifyContent}
  >
    {children}
  </StyledMiddle>
);

export default Middle;
