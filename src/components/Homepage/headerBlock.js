import React from "react";
import styled from "styled-components"
import HeroImg from "../../images/hero-night.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${HeroImg}) no-repeat center center fixed;
  background-size: cover;
  background-attachment: scroll;
`;

const MissionBlock = styled.div`
  color: white;
  width: 70rem;
`;

const PreText = styled.div`
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
`;

const Statement = styled.div`
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  font-size: 4.5rem;
  line-height: 4.5625rem;
  font-weight: 600;
  letter-spacing: -0.125rem;
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.4);
`;

const HeaderBlock = ({pretext, missionStatement}) => (
    <Container>
      <MissionBlock>
        <PreText>{pretext}</PreText>
        <Statement>{missionStatement}</Statement>
      </MissionBlock>
    </Container>
);

export default HeaderBlock;
