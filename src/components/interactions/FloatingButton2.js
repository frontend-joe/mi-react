import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { darken } from "polished";

const Button = styled.button`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  padding: 0;
  border-radius: 50%;
  border: 0;
  background: #d343ff;
  cursor: pointer;
  outline: none;
  transform: rotate(${(p) => (!p.open ? 0 : "-45deg")});
  transition: transform 0.15s, background 0.15s;

  &:hover {
    background: ${darken(0.05, "#d343ff")};
  }

  & > span {
    font-size: 36px;
  }
`;

const Icon = styled.span`
  font-size: 2rem;
  color: white;
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
  margin-bottom: 1rem;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: ${(p) => p.background};

  opacity: ${(p) => (p.open ? 1 : 0)};
  transform: scale(${(p) => (p.open ? 1 : 0)});
  transform-origin: bottom;
  cursor: pointer;

  &:hover {
    background: ${(p) => darken(0.05, p.background)};
  }

  animation: ${(p) =>
      p.open === true
        ? inKeyframes(p.index)
        : p.open === false
        ? outKeyframes(p.index)
        : null}
    0.75s;

  & > span {
    font-size: 18px;
  }
`;

const FloatingButton2 = () => {
  const [open, setOpen] = useState(undefined);
  return (
    <>
      <Button onClick={() => setOpen(!open)} open={open}>
        <Icon className="material-icons">add</Icon>
      </Button>
      <MenuWrapper open={open}>
        <Menu>
          <MenuButton background="#9c65ed" index={2} open={open}>
            <Icon className="material-icons">sms</Icon>
          </MenuButton>
          <MenuButton background="#7f5dff" index={1} open={open}>
            <Icon className="material-icons">email</Icon>
          </MenuButton>
          <MenuButton background="#5da3ff" index={0} open={open}>
            <Icon className="material-icons">movie_creation</Icon>
          </MenuButton>
        </Menu>
      </MenuWrapper>
    </>
  );
};

export default FloatingButton2;
