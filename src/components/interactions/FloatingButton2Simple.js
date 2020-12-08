import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Button = styled.button`
  position: relative;
  z-index: 1;
  width: 64px;
  height: 64px;
  font-size: 36px;
  border-radius: 50%;
  background: #d343ff;
  transform: rotate(${(p) => (!p.open ? 0 : "-45deg")});
  transition: transform 0.15s;
`;

const gap = 20;

const inKeyframes = (i) => keyframes`
  0% { opacity: 0; transform: scale(0); }
  ${i === 0 ? 0 : (i * gap) / 2}% {
    opacity: 0; transform: scale(0);
  }
  ${i === 0 ? gap : (i * gap) / 2 + gap}% {
    opacity: 1;
    transform: scale(1);
  }
  100% { opacity: 1; transform: scale(1) }
`;

const outKeyframes = (i) => keyframes`
  0% { opacity: 1; transform: scale(1);}
  ${i === 0 ? 0 : (i * gap) / 2}% {
    opacity: 1; transform: scale(1);
  }
  ${i === 0 ? gap : (i * gap) / 2 + gap}% {
    opacity: 0; transform: scale(0);
  }
  100% { opacity: 0; transform: scale(0);
  }
`;

const MenuWrapper = styled.div`
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  right: 0;
  bottom: 64px;
  width: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(${(p) => (p.open ? 1 : 0)});
  opacity: ${(p) => (p.open ? 1 : 0)};
  transform-origin: bottom;
  border-radius: 50%;
  border: 0;
  background: ${(p) => p.background};

  animation: ${(p) =>
      p.open === true
        ? inKeyframes(p.index)
        : p.open === false
        ? outKeyframes(p.index)
        : null}
    0.75s;
`;

const buttons = ["#9c65ed", "#7f5dff", "#5da3ff"];

const FloatingButton2 = () => {
  const [open, setOpen] = useState(undefined);
  return (
    <>
      <Button onClick={() => setOpen(!open)} open={open}>
        +
      </Button>
      <MenuWrapper open={open}>
        <Menu>
          {buttons.map((c, i) => (
            <MenuButton background={c} index={i} open={open}>
              {i}
            </MenuButton>
          ))}
        </Menu>
      </MenuWrapper>
    </>
  );
};

export default FloatingButton2;
