import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";

const Wrapper = styled.nav`
  position: relative;
  width: 241px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarSvg = styled.svg`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;

const NavbarPath = styled.path`
  fill: #222122;
`;

const Icon = styled.span`
  font-size: 28px;
  padding: 0 2rem;
  color: ${rgba("white", 0.5)};
  cursor: pointer;
  transition: color 0.35s;

  &:hover {
    color: ${rgba("white", 0.85)};
  }
`;

const Menu = styled.div`
  position: absolute;
  bottom: 44px;
  left: 50%;
  width: 54px;
  height: ${(p) => (p.open ? "180px" : "54px")};
  border-radius: 27px;
  background: #772dd8;
  transform: translate(-50%, 0);
  transition: height 0.35s;
`;

const MenuToggle = styled.button`
  position: absolute;
  left: 7px;
  bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: ${(p) => (p.open ? rgba("black", 0.175) : "transparent")};
  transform: rotate(${(p) => (p.open ? "-45deg" : "90deg")});
  outline: none;
  cursor: pointer;
  transition: transform 0.35s;

  & > span {
    font-size: 28px;
    color: white;
  }
`;

const MenuItems = styled.div`
  position: absolute;
  bottom: 55px;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, ${(p) => (p.open ? 0 : "20px")})
    scale(${(p) => (p.open ? 1 : 0)});
  transform-origin: bottom;
  transition: transform 0.35s;
`;

const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: ${rgba("white", 0.67)};
  cursor: pointer;
  transition: color 0.35s;

  &:hover {
    color: ${rgba("white", 0.85)};
  }
`;

const MinimalNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Menu open={open}>
        <MenuItems open={open}>
          <MenuButton>
            <span className="uil uil-camera" />
          </MenuButton>
          <MenuButton>
            <span className="uil uil-comment-dots" />
          </MenuButton>
          <MenuButton>
            <span className="uil uil-envelope" />
          </MenuButton>
        </MenuItems>

        <MenuToggle open={open} onClick={() => setOpen(!open)}>
          <span className="material-icons">add</span>
        </MenuToggle>
      </Menu>
      <Icon className="uil uil-estate" />
      <Icon className="uil uil-setting" />
      <NavbarSvg
        width="300"
        height="69"
        viewBox="0 0 300 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <NavbarPath
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M218 0C230.703 0 241 10.2974 241 23V44.7485C241 57.451 230.703 67.7485 218 67.7485H120.626C120.557 67.7485 120.5 67.805 120.5 67.8747V67.8747C120.5 67.9444 120.443 68.0009 120.374 68.0009H23C10.2974 68.0009 0 57.7035 0 45.0009V23.2524C0 10.5499 10.2975 0.252441 23 0.252441H79.3273C84.096 0.252441 86.4364 4.66883 89.3316 10.132C94.0156 18.9706 100.152 30.549 120.371 30.598C120.441 30.5981 120.5 30.5416 120.5 30.4719V30.4719C120.5 30.4022 120.559 30.3457 120.629 30.3455C140.848 30.2966 146.984 18.7181 151.668 9.87954C154.564 4.41639 156.904 0 161.673 0H218Z"
          fill="#C4C4C4"
        />
      </NavbarSvg>
    </Wrapper>
  );
};

export default MinimalNavbar;
