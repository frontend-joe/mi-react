import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { rgba } from "polished";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Frame = styled.div`
  ${"" /* position: relative;
  width: 600px;
  height: 750px;
  display: flex;
  align-items: center;
  justify-content: center; */}
`;

const Button = styled.button`
  position: absolute;
  z-index: 1;
  bottom: 189px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 1.25rem 2rem;
  border-radius: 50px;
  border: 0;
  background: #7a00ff;
  outline: none;
  cursor: pointer;
  color: ${rgba("white", 0.85)};
`;

const ToastAnimations = createGlobalStyle`
  @keyframes up {
    0% { transform: translateY(94px); }
    100% { transform: translateY(0); }
  }

  .slideUp { animation-name: up; }

  @keyframes down {
    0& { transform: translateY(0); }
    100% { transform: translateY(144px); }
  }
  .slideDown { animation-name: down; }
`;

const ToastStyles = createGlobalStyle`
  body .Toastify__toast-container {
    bottom: 110px;
    margin: 0;
  }

  body .Toastify__toast {
    user-select: none;
    padding: 1rem;
    font-family: Euclid Circular A;
    border-radius: 0.5rem;
  }

  body .Toastify__toast--success {
    background: #39bf9a;
  }

  body .Toastify__progress-bar {
    background: ${rgba("black", 0.15)}
  }
`;

const CloseIcon = styled.button`
  border: 0;
  background: transparent;
  color: white;
  cursor: pointer;
  outline: none;
`;

const slideTransition = cssTransition({
  enter: "slideUp",
  exit: "slideDown",
  duration: 350,
});

const ToastifyAlert = () => {
  const click = () => toast.success("Well that was a success ...");
  return (
    <Frame>
      <ToastAnimations />
      <ToastStyles />
      <Button onClick={click}>Show Toast</Button>
      <ToastContainer
        autoClose={false}
        closeButton={<CloseIcon className="material-icons">close</CloseIcon>}
        transition={slideTransition}
        position="bottom-center"
      />
    </Frame>
  );
};

export default ToastifyAlert;
