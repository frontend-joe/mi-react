import React, { useState } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import man from "assets/images/man.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Phone = styled.div`
  overflow: hidden;
  position: relative;
  width: 240px;
  height: 480px;
  padding: 2rem 0;
  border-radius: 40px;
  background: #230b46;
`;

const openStyles = css`
  transform: translateX(110px) scale(0.85);
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
`;

const Avatar = styled.img`
  margin-left: 1.5rem;
  width: 80%;
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

const Content = styled.div`
  padding: 0 1.5rem;
`;

const Carousel = () => {
  return (
    <Phone>
      <Content>
        <Burger className="uil uil-bars" />
        <Subtitle>Hello,</Subtitle>
        <Title>Mr. Tony Burk</Title>
      </Content>
      <CarouselProvider
        naturalSlideWidth={152}
        naturalSlideHeight={152}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <Avatar src={man} />
          </Slide>
          <Slide index={1}>
            <Avatar src={man} />
          </Slide>
          <Slide index={2}>
            <Avatar src={man} />
          </Slide>
        </Slider>
      </CarouselProvider>
    </Phone>
  );
};

export default Carousel;
