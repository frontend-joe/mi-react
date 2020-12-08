import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";

const Wrapper = styled.nav`
  position: relative;
  width: 242px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarSvg = styled.svg`
  position: absolute;
  z-index: -1;
`;

const NavbarPath = styled.path`
  fill: #222122;
`;

const Icon = styled.span`
  padding: 0 2rem;
  color: ${rgba("white", 0.5)};

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
  transform: translateX(-50%);
  transition: height 0.35s;
`;

const MenuToggle = styled.button`
  position: absolute;
  left: 7px;
  bottom: 6px;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: white;
  transform: rotate(${(p) => (p.open ? "-45deg" : "90deg")});
  transition: transform 0.35s;
`;

const SvgBackground = () => (
  <NavbarSvg
    width="300"
    height="69"
    viewBox="0 0 300 69"
    xmlns="http://www.w3.org/2000/svg"
  >
    <NavbarPath d="M218 0C230.703 0 241 10.2974 241 23V44.7485C241 57.451 230.703 67.7485 218 67.7485H120.626C120.557 67.7485 120.5 67.805 120.5 67.8747V67.8747C120.5 67.9444 120.443 68.0009 120.374 68.0009H23C10.2974 68.0009 0 57.7035 0 45.0009V23.2524C0 10.5499 10.2975 0.252441 23 0.252441H79.3273C84.096 0.252441 86.4364 4.66883 89.3316 10.132C94.0156 18.9706 100.152 30.549 120.371 30.598C120.441 30.5981 120.5 30.5416 120.5 30.4719V30.4719C120.5 30.4022 120.559 30.3457 120.629 30.3455C140.848 30.2966 146.984 18.7181 151.668 9.87954C154.564 4.41639 156.904 0 161.673 0H218Z" />
  </NavbarSvg>
);

const MinimalNavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Menu open={open}>
        <MenuToggle open={open} onClick={() => setOpen(!open)}>
          <span className="uil uil-plus" />
        </MenuToggle>
      </Menu>
      <SvgBackground />
      <Icon className="uil uil-estate" />
      <Icon className="uil uil-setting" />
    </Wrapper>
  );
};

export default MinimalNavbar;
