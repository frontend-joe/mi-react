import React, { useState } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import man from "assets/images/man.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  ButtonBack,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Phone = styled.div`
  overflow: hidden;
  position: relative;
  width: 240px;
  height: 480px;
  padding: 2rem 0;
  border-radius: 40px;
  background: #1a132b;
`;

const openStyles = css`
  transform: translateX(110px) scale(0.85);
`;

const colorText = rgba("white", 0.85);
const colorSubtitle = rgba("white", 0.5);

const Subtitle = styled.div`
  color: ${colorSubtitle};
  margin-bottom: 1.5rem;
`;

const Title = styled.div`
  color: ${colorText};
  font-size: 20px;
  margin-bottom: 20px;
`;

const SlideImage = styled.div`
  width: 240px;
  height: 240px;
  background: url(${(p) => p.image});
  background-position: center;
  background-size: 200%;
  background-repeat: no-repeat;
`;

const Burger = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  width: 36px;
  height: 36px;
  font-size: 36px;
  margin-left: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colorText};
  outline: none;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
`;

const slides = [
  "https://www.pictorem.com/collection/900_Angel-Estevez_paisagem_404t.jpg",
  "https://www2.pictorem.com/uploads/wallrandom/rand_233797.jpg",
  "https://www2.pictorem.com/uploads/wallgenerate/233797.jpg",
];

const Nav = styled.nav`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const sharedStyles = css`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${rgba("#1a132b", 0.5)};
  color: white;
  border: 0;
  font-size: 40px;
  outline: none;
  transition: opacity 0.35s;

  &:disabled {
    opacity: 0;
  }
`;

const NextButton = styled(ButtonNext)`
  ${sharedStyles};
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

const BackButton = styled(ButtonBack)`
  ${sharedStyles};
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const Carousel = () => {
  return (
    <Phone>
      <Burger className="uil uil-bars" />
      <Wrapper>
        <CarouselProvider
          naturalSlideWidth={240}
          naturalSlideHeight={240}
          totalSlides={slides.length}
          visibleSlides={1}
        >
          <Slider>
            {slides.map((slide, index) => (
              <Slide index={index}>
                <SlideImage image={slide} />
              </Slide>
            ))}
          </Slider>

          <Nav>
            <BackButton className="material-icons">chevron_left</BackButton>
            <NextButton className="material-icons">chevron_right</NextButton>
          </Nav>
        </CarouselProvider>
      </Wrapper>
    </Phone>
  );
};

export default Carousel;
