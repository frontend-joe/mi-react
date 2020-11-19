import React, { useState } from "react";
import styled from "styled-components";
import { rgba } from "polished";

const Frame = styled.div`
  position: relative;
  width: 600px;
  height: 750px;
`;

const Button = styled.button`
  position: absolute;
  bottom: 189px;
  left: 50%;
  transform: translateX(-50%);
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
  ${"" /* top: 50%; */};
  ${"" /* left: 50%; */};
  ${"" /* transform: translate(-50%, -50%); */};
`;

const ButtonIcon = styled.div`
  font-size: 19px;
  margin-right: 0.625rem;
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

const DialogContent = styled.div`
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.75rem;

  & > .material-icons {
    color: ${rgba("#10132F", 0.38)};
  }
`;

const Title = styled.div`
  font-weight: 600;
  color: ${rgba("#10132F", 0.8)};
`;

const Message = styled.div`
  font-size: 0.875rem;
  color: ${rgba("#10132F", 0.38)};
  margin-bottom: 1.75rem;
`;

const CodeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const CodeInput = styled.input`
  flex: 1 0 auto;
  width: 50px;
  height: 50px;
  text-align: center;
  border: 3px solid ${rgba("black", 0.05)};
  border-radius: 0.325rem;
  outline: none;

  &:focus {
    border-color: #6330b4;
  }
`;

const CodeDash = styled.div`
  margin: 0 1rem;
`;

const GradientButton = styled.button`
  color: white;
  width: 100%;
  border: 0;
  border-radius: 0.5rem;
  padding: 1rem;
  outline: none;
  cursor: pointer;
  background: linear-gradient(to right, #6330b4, #6300ff);
`;

const SlideUpDialog = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Frame>
      <Button onClick={() => setOpen(true)}>
        <ButtonIcon className="material-icons-outlined">fact_check</ButtonIcon>
        Verify Me
      </Button>
      <Overlay isOpen={isOpen} onClick={() => setOpen(false)} />
      <Dialog isOpen={isOpen}>
        <DialogContent>
          <Header>
            <Title>Verify Account</Title>
            <span className="material-icons" onClick={() => setOpen(false)}>
              close
            </span>
          </Header>
          <Message>Enter the code we just sent you below.</Message>
          <CodeRow>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
          </CodeRow>
          <GradientButton onClick={() => setOpen(false)}>Submit</GradientButton>
        </DialogContent>
      </Dialog>
    </Frame>
  );
};

export default SlideUpDialog;
