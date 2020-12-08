import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.button {
  height: 76px;
  padding: 16px;
  border-radius: 50%;
  border: 0;
  background: #7631e5;
  outline: none;
  cursor: pointer;
}
.icon {
  display: block;
  position: relative;
  width: 44px;
  height: 44px;
}
.dot {
  position: absolute;
  top: calc(50% - 4px);
  left: calc(50% - 4px);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fbfbfb;
  transition: transform 0.5s;

  &:nth-child(1) {
    transform: translateX(-17px);
  }

  &:nth-child(2) {
    transform: translateX(0);
  }

  &:nth-child(3) {
    transform: translateX(17px);
  }

  &.open:nth-child(1) {
    transform: translateX(0);
  }

  &.open:nth-child(2) {
    transform: translateX(0);
  }

  &.open:nth-child(3) {
    transform: translateX(0);
  }
}
.rectangle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 8px;
  height: 5px;
  border-radius: 5px;
  background: #fbfbfb;
  transition-property: opacity, height;
  transition-duration: 0.5s;
  &.first {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &.open {
    height: 44px;
  }
}
`;

const MeatballButton = ({}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <button className="button" onClick={() => setOpen(!isOpen)}>
        <span className="icon">
          <span className={`dot ${isOpen && "open"}`} />
          <span className={`dot ${isOpen && "open"}`} />
          <span className={`dot ${isOpen && "open"}`} />
          <span className={`rectangle first ${isOpen && "open"}`} />
          <span className={`rectangle ${isOpen && "open"}`} />
        </span>
      </button>
    </>
  );
};

export default MeatballButton;
