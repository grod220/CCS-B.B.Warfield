import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";

const Container = styled.div`
  height: 26rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BackgroundImg = styled.div`
  background: url('${props => props.image}');
  width: 100vw;
  height: 39rem;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  color: white;
  position: absolute;
  z-index: 98;
  text-align: center;
  font-weight: 400;
  font-family: Crimson Text, georgia, serif;
  font-style: italic;
  letter-spacing: 5px;
  font-size: 45px;
  margin: 17px 10px 0;
`;

const HeaderBlock = ({ img, titleText }) => (
  <Container>
    <Title>{titleText}</Title>
    <Parallax
      offsetYMin={-40}
      offsetYMax={0}
      slowerScrollRate
      disabled={isMobile}
    >
      <BackgroundImg image={img} />
    </Parallax>
  </Container>
);

export default HeaderBlock;
