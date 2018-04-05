import React from "react";
import styled from "styled-components";
import HeroImg from "../../images/hero-night.jpg";
import { Parallax } from "react-scroll-parallax";

const Container = styled.div`
  height: 100vh;
  min-height: 33.75rem;
  overflow: hidden;
  position: relative;
`;

const WithBackground = styled.div`
  background: url(${HeroImg});
  width: 100vw;
  height: 100vh;
  min-height: 33.75rem;
  background-size: cover;
  background-position: center;
`;

const MissionBlock = styled.div`
  color: white;
  width: 78.75rem;
  position: absolute;
  bottom: 30%;
  margin: 0 auto;
  left: 0;
  right: 0;
`;

const PreText = styled.div`
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2813rem;
`;

const Statement = styled.div`
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  font-size: 5.0625rem;
  line-height: 5.1328rem;
  font-weight: 600;
  letter-spacing: -0.1406rem;
  text-shadow: 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.4);
`;

const HeaderBlock = ({ pretext, missionStatement }) => (
  <Container>
    <Parallax offsetYMin={-50} offsetYMax={50} slowerScrollRate>
      <WithBackground />
    </Parallax>
    <MissionBlock>
      <PreText>{pretext}</PreText>
      <Statement>{missionStatement}</Statement>
    </MissionBlock>
  </Container>
);

export default HeaderBlock;
