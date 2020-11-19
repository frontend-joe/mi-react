import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: inline-flex;
  border-radius: 0.5rem;
  background: #f1ebf9;
  padding: 0.65rem 0.5rem;
`;

const Dot = styled.span`
  display: inline-block;
  width: ${(p) => p.dotSize || 5}px;
  height: ${(p) => p.dotSize || 5}px;
  margin: 0 ${(p) => (p.dotSize || 5) * 0.26}px;
  border-radius: 50%;
  background: #c4bbd0;
`;

const jump = "-3px";

const dot1Keyframes = keyframes`
  0% { transform: translateY(0);}
  20% { transform: translateY(${jump});}
  45% { transform: translateY(0);}
`;

const dot2Keyframes = keyframes`
  10% { transform: translateY(0);}
  35% { transform: translateY(${jump});}
  60% { transform: translateY(0);}
`;

const dot3Keyframes = keyframes`
  20% { transform: translateY(0);}
  45% { transform: translateY(${jump});}
  70% { transform: translateY(0);}
`;

const duration = "1.1s";

const Dot1 = styled(Dot)`
  animation: ${dot1Keyframes} ${duration} infinite;
`;

const Dot2 = styled(Dot)`
  animation: ${dot2Keyframes} ${duration} infinite;
`;
const Dot3 = styled(Dot)`
  animation: ${dot3Keyframes} ${duration} infinite;
`;

const TypingIndicator = ({ dotSize }) => (
  <Wrapper>
    <Dot1 dotSize={dotSize} />
    <Dot2 dotSize={dotSize} />
    <Dot3 dotSize={dotSize} />
  </Wrapper>
);

export default TypingIndicator;
