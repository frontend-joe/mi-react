import React from "react";
import styled from "styled-components";
import charlie from "assets/images/charlie.jpg";
import TypingIndicator from "./TypingIndicator";

const Wrapper = styled.div`
  border-radius: 0.5rem;
  background: white;
  width: 280px;
  padding: 0 0 0.375rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 1rem;
  border-bottom: 1px solid #ebedf3;
`;

const Icon = styled.span`
  flex: 0 0 24px;
  font-size: 20px;
  color: #acaab7;
`;

const Title = styled.div`
  flex: 1 1 100px;
  text-align: center;
  font-weight: 600;
  font-size: 0.875rem;
  color: #565360;
`;

const Content = styled.div`
  padding: 1rem;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const AvatarName = styled.div`
  font-weight: 600;
  font-size: 0.75rem;
  color: #565360;
`;

const LastMessage = styled.div`
  font-size: 0.625rem;
  color: #acaab7;
`;

const Message = styled.div`
  background: #dafbfb;
  color: #7e8299;
  border-radius: 0.25rem;
  padding: 1rem;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 1rem;
  border-top: 1px solid #ebedf3;
`;

const Textbox = styled.span`
  font-size: 0.875rem;
  color: #acaab7;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%;
  background: #2dd4bd;
  color: white;

  & > span {
    transform: translateX(1px);
    font-size: 16px;
  }
`;

const TypingText = styled.span`
  padding: 0.5rem 0 0;
  font-size: 0.625rem;
  color: #c7bbd6;
  margin-left: 0.5rem;
`;

const TypingIndicatorExample = ({}) => (
  <Wrapper>
    {true && (
      <Header>
        <Icon className="material-icons">more_horiz</Icon>
        <Title>Chat</Title>
        <Icon className="material-icons">person_add</Icon>
      </Header>
    )}

    <Content>
      <ChatHeader>
        <Avatar src={charlie} />
        <div style={{ marginLeft: "0.5rem", flex: 1 }}>
          <AvatarName>Christie Jones</AvatarName>
          <LastMessage>Just now</LastMessage>
        </div>
        {/* <Icon className="material-icons">person_add</Icon> */}
      </ChatHeader>
      <Message>I'll explain it in more detail ...</Message>
      <TypingIndicator dotSize={5} />
      <TypingText>Christie is typing</TypingText>
    </Content>
    <Footer>
      <Textbox>Type a message</Textbox>
      <Button>
        <span className="material-icons">send</span>
      </Button>
    </Footer>
  </Wrapper>
);

export default TypingIndicatorExample;
