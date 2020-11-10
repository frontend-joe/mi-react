import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { rgba } from "polished";
import boy from "assets/images/boy.svg";

const Card = styled.div`
  border-radius: 0.5rem;
  background: #f2edf7;
  color: white;
  width: 200px;
  padding: 1.5rem;
`;

const skeletonColor = "#e0daeb";
const borderRadius = "3px";

const glimmer = keyframes`
  0% { transform: rotate(10deg) translate(-200%, -50%); }
  100% { transform: rotate(10deg) translate(200%, -50%); }
`;

const skeletonShimmer = css`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 200px;
  background: ${rgba("#190932", 0.05)};
  animation: ${glimmer} 1.25s infinite linear;
`;

const Skeleton = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => props.width || "120px"};
  height: ${(props) => props.height || "12px"};
  margin: ${(props) => props.margin || 0};
  border-radius: ${borderRadius};
  background: ${skeletonColor};

  &::before {
    ${skeletonShimmer};
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  border-radius: ${borderRadius};
  background: #a36aff;
  background-size: 80%;
  background-position: center bottom;
  background-repeat: no-repeat;
`;

const Text = styled.div`
  margin: ${(props) => props.margin || 0};
  font-weight: 500;
  font-size: ${(props) => props.fontSize || "1rem"};
  color: ${(props) => props.color};
`;

const SkeletonScreen = ({}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3750);
  });

  return (
    <Card>
      {loading ? (
        <>
          <Row>
            <Skeleton width="40px" height="40px" margin="0 1rem 0 0" />
            <div>
              <Skeleton width="130px" margin="0 0 0.6rem" />
              <Skeleton width="80px" />
            </div>
          </Row>
        </>
      ) : (
        <>
          <Row>
            <Image style={{ backgroundImage: `url(${boy})` }} />
            <div>
              <Text color="#565360">Matt Drinkwater</Text>
              <Text color="#ACAAB7" fontSize="0.875rem">
                Developer
              </Text>
            </div>
          </Row>
        </>
      )}
    </Card>
  );
};

export default SkeletonScreen;
