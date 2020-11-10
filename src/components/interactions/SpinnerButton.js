import React, { useState, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";
import { rgba, darken, lighten } from "polished";

// frame color #4a307b
const colorPrimary = "#6e45bc";

const spin = keyframes`
  100% { transform: rotate(360deg); }
`;

const spinnerOpenStyles = css`
  visibility: visible;
  opacity: 1;
`;

const SpinnerWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${darken(0.1, colorPrimary)};
  visibility: hidden;
  opacity: 0;
  ${({ isOpen }) => isOpen && spinnerOpenStyles};
  transition-property: visibility, opacity;
  transition-duration: 0.3s;
`;

const Spinner = styled.span`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border-width: 5px;
  border-style: solid;
  border-color: ${rgba("white", 0.1)};
  border-top-color: white;
  animation: ${spin} 1.25s infinite linear;
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const FadeIn = styled.span`
  display: flex;
  align-items: center;
  line-height: 1;
  animation: ${fadeIn} 0.25s;
`;

// slide background: #36294c

const Button = styled.button`
  position: relative;
  overflow: hidden;
  min-width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  background: ${colorPrimary};
  height: 64px;
  border-radius: 0.5rem;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1.1rem;
  color: white;
  outline: none;
  cursor: pointer;
  transition: background 0.25s;
`;

const SpinnerButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsComplete(true);
      setTimeout(() => {
        setIsComplete(false);
      }, 3000);
    }, 2500);
  });

  return (
    <Button onClick={handleClick} disabled={isLoading || isComplete}>
      {!isComplete && "Sign Up"}
      {isComplete && (
        <>
          <span
            className="material-icons-outlined"
            style={{ marginRight: "0.5rem" }}
          >
            check
          </span>{" "}
          All Done
        </>
      )}
      <SpinnerWrapper isOpen={isLoading}>
        <Spinner />
      </SpinnerWrapper>
    </Button>
  );
};

export default SpinnerButton;
