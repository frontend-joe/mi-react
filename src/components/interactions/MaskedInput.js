import React, { useState } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-radius: 0.325rem;
  background: #612ec1;
  color: white;
`;

const Icon = styled.span`
  margin-right: 0.6rem;
  font-size: 28px;
  color: ${rgba("white", 0.65)};
`;

const Dash = styled.span`
  font-weight: 800;
  color: ${rgba("white", 0.2)};
`;

const Input = styled.input`
  background: transparent;
  border: 0;
  font-size: 1.5rem;
  text-align: center;
  width: 32px;
  outline: none;
  color: white;

  &::placeholder {
    color: ${rgba("white", 0.2)};
  }
`;

const MaskedInput = ({}) => {
  return (
    <Wrapper>
      <Icon className="material-icons-outlined">event_note</Icon>
      <Input placeholder="01" />
      <Dash>/</Dash>
      <Input placeholder="01" />
      <Dash>/</Dash>
      <Input placeholder="2002" style={{ width: "60px" }} />
    </Wrapper>
  );
};

export default MaskedInput;
