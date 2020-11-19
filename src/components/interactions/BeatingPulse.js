import React from "react";
import styled, { keyframes, css } from "styled-components";
import { rgba } from "polished";

const duration = "2.75s";

const Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const sharedStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const iconBeat = keyframes`
  0% { transform: scale(1); }
  10% { transform: scale(1.15); }
  30% { transform: scale(1); }
`;

const Icon = styled.div`
  ${sharedStyles};
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${rgba("white", 0.85)};
  background: #291e3a;
  border: 5px solid ${rgba("white", 0.65)};
  animation: ${iconBeat} ${duration} infinite;
`;

const pulse = (scale) => keyframes`
  0% { transform: scale(1); opacity: 1 }
  50% { transform: scale(${scale}); opacity: 1 }
  80% { transform: scale(1); opacity: 1 }
`;

const Pulse = styled.div`
  ${sharedStyles};
  z-index: 1;
  background: ${rgba("white", 0.05)};
  animation: ${(p) => pulse(p.scale)} ${duration} infinite;
`;

const BeatingPulse = () => (
  <Wrapper>
    <Icon>DR</Icon>
    <Pulse scale={4} />
    <Pulse scale={3} />
    <Pulse scale={2} />
  </Wrapper>
);

export default BeatingPulse;
