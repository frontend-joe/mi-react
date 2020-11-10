import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

// frame color #4a307b
const colorPrimary = "#5e5d5f";

const Button = styled.button`
  position: relative;
  overflow: hidden;
  min-width: 180px;
  border: 0;
  padding: 0;
  background: ${(p) => (p.isComplete ? "#8500ff" : "#f7f5f8")};
  height: 64px;
  border-radius: 0.5rem;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${(p) => (p.isComplete ? "white" : colorPrimary)};
  outline: none;
  cursor: pointer;
  transition: background 0.5s;

  &:disabled {
    cursor: not-allowed;
  }
`;

const loadKeyframes = keyframes`
  0% { transform: translateX(-110%);}
  100% { transform: translateX(110%);}
`;

const Loader = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #fc00ff, #00dbde);
  animation: ${loadKeyframes} 1s 5;
`;

const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsComplete(true);
      setTimeout(() => {
        setIsComplete(false);
      }, 3000);
    }, 5000);
  };

  return (
    <Button
      onClick={handleClick}
      isComplete={isComplete}
      disabled={isLoading || isComplete}
    >
      {!isComplete && !isLoading && "Update"}
      {isComplete && "Complete"}
      {!isComplete && isLoading && (
        <>
          Updating
          <Loader />
        </>
      )}
    </Button>
  );
};

export default LoadingButton;
