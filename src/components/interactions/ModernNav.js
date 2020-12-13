import React, { useState } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import man from "assets/images/man.png";

const Phone = styled.div`
  overflow: hidden;
  position: relative;
  width: 240px;
  height: 480px;
  border-radius: 40px;
  background: #5a32a0;
`;

const openStyles = css`
  transform: translateX(110px) scale(0.85);
`;

const Content = styled.div`
  height: 800px;
  padding: 2rem 1.5rem;
  border-radius: 40px;
  background: #210f40;
  transform: translateX(0) scale(1);
  transition: 0.45s;
  ${(p) => p.open && openStyles};
`;

const colorText = rgba("white", 0.85);
const colorSubtitle = rgba("white", 0.5);

const Subtitle = styled.div`
  color: ${colorSubtitle};
  margin-bottom: 0.5rem0;
`;

const Title = styled.div`
  color: ${colorText};
  font-size: 20px;
  margin-bottom: 20px;
*`;

const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 40px;
  opacity: 0.75;
`;

const Burger = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  width: 36px;
  height: 36px;
  font-size: 36px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colorText};
  outline: none;
  cursor: pointer;
`;

const Nav = styled.nav`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 44px;
  padding: 0 1rem;
  border: 0;
  background: transparent;
  color: ${colorSubtitle};
  cursor: pointer;

  &:hover {
    color: ${colorText};
  }
`;

const NavIcon = styled.span`
  margin-right: 0.5rem;
  font-size: 20px;
`;

const NavText = styled.span`
  font-size: 0.875rem;
`;

const ModernNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Phone>
      <Nav>
        <NavButton>
          <NavIcon className="uil uil-home" />
          <NavText>Home</NavText>
        </NavButton>
        <NavButton>
          <NavIcon className="uil uil-cloud-info" />
          <NavText>About</NavText>
        </NavButton>
        <NavButton>
          <NavIcon className="uil uil-notes" />
          <NavText>Docs</NavText>
        </NavButton>
        <NavButton>
          <NavIcon className="uil uil-sign-out-alt" />
          <NavText>Logout</NavText>
        </NavButton>
      </Nav>
      <Content open={open}>
        <Burger onClick={() => setOpen(!open)} className="uil uil-bars" />
        <Subtitle>Hello,</Subtitle>
        <Title>Mr. Tony Burk</Title>
        <Avatar src={man} />
      </Content>
    </Phone>
  );
};

export default ModernNav;
