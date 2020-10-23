import React, { useState } from "react";
import styled, { css } from "styled-components";

const borderRadius = "3px";
const buttonWidth = "100px";
const buttonHeight = "80px";
const transition = "0.65s";

const Wrapper = styled.button`
  position: relative;
  width: ${buttonWidth};
  height: ${buttonHeight};
  border: 0;
  background: transparent;
  outline: none;
  cursor: pointer;
`;

const Box = styled.span`
  position: absolute;
  top: 34px;
  left: 40px;
  width: 400px;
  height: 283px;
  border-radius: 33px;
  background: #d7b901;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: scale(${({ isOpen }) => (isOpen ? 1 : 0)});
  transform-origin: 0% 0%;
  transition-property: opacity, transform;
  transition-duration: ${transition};
`;

const sharedAll = css`
  position: absolute;
  background: ${({ color }) => color || "black"};
  border-radius: ${borderRadius};
  transition: transform ${transition};
`;

const sharedSmallRectangles = css`
  width: 50px;
  height: 10px;
`;

const TopRectangle = styled.span`
  ${sharedAll};
  ${sharedSmallRectangles};
  ${({ isOpen }) =>
    isOpen
      ? "transform: translate(17px, 0) rotate(45deg);"
      : "transform: translate(0, 0) rotate(0);"};

  top: 0;
  left: 0;
  transform-origin: 0% 0%;
`;

const MiddleRectangle = styled.span`
  ${sharedAll};
  top: 50%;
  left: 0;
  width: 100px;
  height: 10px;
  transform: translateY(-50%)
    rotate(${({ isOpen }) => (isOpen ? "-45deg" : "0")});
`;

const BottomRectangle = styled.span`
  ${sharedAll};
  ${sharedSmallRectangles};
  ${({ isOpen }) =>
    isOpen
      ? "transform: translate(-17px, 0) rotate(45deg);"
      : "transform: translate(0, 0) rotate(0);"};

  bottom: 0;
  right: 0;
  transform-origin: 100% 100%;
`;

const SexyBurgerButton = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Box isOpen={isOpen}></Box>
      <TopRectangle color={color} isOpen={isOpen} />
      <MiddleRectangle color={color} isOpen={isOpen} />
      <BottomRectangle color={color} isOpen={isOpen} />
    </Wrapper>
  );
};

export default SexyBurgerButton;
