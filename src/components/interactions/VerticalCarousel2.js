import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

// frame color #291b44

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 280px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 2rem;
  flex: 0 0 72px;
  width: 72px;
  height: 72px;
  border-radius: 0.5rem 0 0 0.5rem;
  background: #7823fd;
  color: white;
`;

const Content = styled.div`
  flex: 1 0 auto;
  position: relative;
  background: white;
  border-radius: 0 0.5rem 0.5rem 0;
`;

const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(
    -${(props) => (props.activeIndex === 0 ? 0 : props.activeIndex * 100)}%
  );
  transition: transform ease-out 0.45s;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  transform: translateY(
    ${(props) => (props.index === 0 ? 0 : props.index * 100)}%
  );
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 0.25rem;
  margin-right: 1rem;
`;

const Title = styled.div`
  padding: 0 1rem;
  color: #565360;
  font-weight: 600;
`;

const Subtitle = styled.div`
  padding: 0 1rem;
  color: #acaab7;
  font-size: 0.75rem;
`;

const slides = [
  {
    title: "The Weeknd",
    subtitle: "In Your Eyes",
    image: require("assets/images/music1.jpg"),
  },
  {
    title: "Tones and I",
    subtitle: "Dance Monkey",
    image: require("assets/images/music2.jpg"),
  },
  {
    title: "Saint Jhn",
    subtitle: "Roses",
    image: require("assets/images/music3.png"),
  },
  {
    title: "Lewis Capaldi",
    subtitle: "Someone You Loved",
    image: require("assets/images/music4.png"),
  },
  {
    title: "Dua Lipa",
    subtitle: "Don't Start Now",
    image: require("assets/images/music5.png"),
  },
  {
    title: "The Weeknd",
    subtitle: "In Your Eyes",
    image: require("assets/images/music1.jpg"),
  },
];

const VerticalCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === slides.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 3600);
    return () => clearInterval(interval);
  }, [setActiveIndex, activeIndex]);

  return (
    <Wrapper>
      <Icon>
        <span style={{ fontSize: "32px" }} className="material-icons">
          headset
        </span>
      </Icon>
      <Content>
        <Slider activeIndex={activeIndex}>
          {slides.map((s, i) => (
            <Slide index={i}>
              <div>
                <Title>{s.title}</Title>
                <Subtitle>{s.subtitle}</Subtitle>
              </div>
              <Image src={s.image} />
            </Slide>
          ))}
        </Slider>
      </Content>
    </Wrapper>
  );
};

export default VerticalCarousel;
