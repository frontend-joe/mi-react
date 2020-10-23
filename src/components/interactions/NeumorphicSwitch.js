import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";

// frame background: #6c4aad;

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 15px #5c3f93, -5px -5px 15px #7c55c7;
  background: #6c4aad;
  cursor: pointer;
`;

const SwitchOutline = styled.div`
  position: relative;
  width: 70px;
  height: 30px;
  border-radius: 30px;
  box-shadow: inset 5px 5px 10px #5c3f93, inset -5px -5px 10px #7c55c7;
`;

const transition = "0.35s";
const square = (size) => `width: ${size}; height: ${size};`;

const SwitchHandle = styled.div`
  position: absolute;
  ${square("30px")};
  border-radius: 50%;
  background: linear-gradient(145deg, #fff, #99959e);
  transform: translateX(${({ isOn }) => (isOn ? "40px" : 0)});
  transition: transform ${transition};
`;

const SwitchIndicator = styled.div`
  ${square("10px")};
  border-radius: 50%;
  background: ${({ isOn }) => (isOn ? "#6cc387" : rgba("white", 0.07))};
  transition: background ${transition};
`;

const NeumorphicSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <Wrapper onClick={() => setIsOn(!isOn)}>
      <SwitchOutline>
        <SwitchHandle isOn={isOn} />
      </SwitchOutline>
      <SwitchIndicator isOn={isOn} />
    </Wrapper>
  );
};

export default NeumorphicSwitch;
