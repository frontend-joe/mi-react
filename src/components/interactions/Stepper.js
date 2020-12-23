import React, { useState } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  display: flex;
`;

const StepBadge = styled.span`
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 0.875rem;
  color: ${(p) => (p.isActive ? "white" : "#bbbbbb")};
  background: ${(p) => (p.isActive ? "#7134d3" : "#2f2e2f")};
`;

const sharedStyles = css`
  content: "";
  position: absolute;
  z-index: 1;
  top: 50%;
  width: 50%;
  height: 3px;
  background: #2f2e2f;
`;

const Step = styled.button`
  background: transparent;
  cursor: pointer;
  outline: none;
  border: 0;
  padding: 0;
  position: relative;
  width: 25%;
  text-align: center;

  &::before {
    ${sharedStyles};
    left: 0;
    ${(props) => props.isActive && `background: #7134d3`};
  }

  &::after {
    ${sharedStyles};
    left: 50%;
    ${(p) => p.isActive && !p.isCurrentStep && `background: #7134d3`};
  }

  &:first-child::before,
  &:last-child::after {
    display: none;
  }
`;

const steps = [1, 2, 3, 4];

const Stepper = () => {
  const [activeStep, setActive] = useState(1);
  const isActive = (step) => step <= activeStep;
  const isCurrentStep = (step) => step === activeStep;
  return (
    <Wrapper>
      {steps.map((step) => (
        <Step
          onClick={() => setActive(step)}
          isCurrentStep={isCurrentStep(step)}
          isActive={isActive(step)}
        >
          <StepBadge isActive={isActive(step)}>{step}</StepBadge>
        </Step>
      ))}
    </Wrapper>
  );
};

export default Stepper;
