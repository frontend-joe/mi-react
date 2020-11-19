import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";

const Frame = styled.div`
  position: relative;
  width: 600px;
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  border: 0;
  background: #18023c;
  outline: none;
  cursor: pointer;
  color: ${rgba("white", 0.85)};
`;

const duration = "0.5s";

const Overlay = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${rgba("black", 0.5)};
  visibility: ${(p) => (p.isOpen ? "visible" : "hidden")};
  opacity: ${(p) => (p.isOpen ? 1 : 0)};
  transition-property: visibility opacity;
  transition-duration: ${duration};
`;

const Dialog = styled.div`
  position: absolute;
  z-index: 101;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background: white;
  transform: translateY(${(p) => (p.isOpen ? 0 : "100%")});
  transition: transform ${duration};
`;

const SlideUpDialog = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Frame>
      <Button onClick={() => setOpen(true)}>Click Me</Button>
      <Overlay isOpen={isOpen} onClick={() => setOpen(false)} />
      <Dialog isOpen={isOpen}>{/* Dialog Content */}</Dialog>
    </Frame>
  );
};

export default SlideUpDialog;
