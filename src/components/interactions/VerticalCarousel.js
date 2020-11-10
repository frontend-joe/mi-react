import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

// frame color #291b44

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 250px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 2rem;
  flex: 0 0 64px;
  width: 64px;
  height: 64px;
  border-radius: 0.5rem 0 0 0.5rem;
  background: #6e45bd;
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
  transition: transform 0.45s;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  transform: translateY(
    ${(props) => (props.index === 0 ? 0 : props.index * 100)}%
  );
`;

const Title = styled.div`
  padding: 0.75rem 1rem 0;
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
    title: "Eva Longitude",
    subtitle: "Some text goes here",
  },
  {
    title: "Eva Test",
    subtitle: "Some text goes here",
  },
  {
    title: "Eva Longitude",
    subtitle: "Some text goes here",
  },
  {
    title: "Eva Longitude",
    subtitle: "Some text goes here",
  },
  {
    title: "Eva Test",
    subtitle: "Some text goes here",
  },
  {
    title: "Eva Longitude",
    subtitle: "Some text goes here",
  },
  {
    title: "Eva Longitude",
    subtitle: "Some text goes here",
  },
  {
    title: "Eva Test",
    subtitle: "Some text goes here",
  },
  {
    title: "Eva Longitude",
    subtitle: "Some text goes here",
  },
];

const VerticalCarousel = ({}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // setInterval(() => {
    //   if (activeIndex === slides.length - 1) {
    //     setActiveIndex(0);
    //   } else {
    //     setActiveIndex(activeIndex + 1);
    //   }
    //   console.log("test", activeIndex);
    // }, 3600);
  });

  return (
    <Wrapper>
      <Icon>@</Icon>
      <Content>
        <Slider activeIndex={activeIndex}>
          {slides.map((s, i) => (
            <Slide index={i}>
              <Title>{s.title}</Title>
              <Subtitle>{s.subtitle}</Subtitle>
            </Slide>
          ))}
        </Slider>
      </Content>
    </Wrapper>
  );
};

export default VerticalCarousel;
