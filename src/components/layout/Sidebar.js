import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { NavLink } from "react-router-dom";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #040404;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  color: ${rgba("white", 0.35)};
  padding: 1rem 0;
  text-decoration: none;

  &.active {
    color: white;
  }
`;

const Sidebar = ({}) => (
  <StyledWrapper>
    <StyledNavLink to="/first-slide">First</StyledNavLink>
    <StyledNavLink to="/result-slide">Result</StyledNavLink>
    <StyledNavLink to="/dev-slide">Dev</StyledNavLink>
  </StyledWrapper>
);

export default Sidebar;
