import React from "react";
import styled from "styled-components";
import HeroImg from "../../images/homepage-hero-night.jpg";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";

const Container = styled.div`
  min-height: 33.75rem;
  overflow: hidden;
  position: relative;
  background-color: #24242c;
`;

const WithBackground = styled.div`
  background: url('${HeroImg}');
  width: 100vw;
  max-width: 100%;
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

  @media (max-width: 83rem) {
    width: 95vw;
  }

  @media (max-width: 46.5625rem) {
    top: 45%;
    bottom: unset;
    text-align: center;
  }

  @media (max-width: 25.875rem) {
    width: 90vw;
  }
`;

const PreText = styled.div`
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2813rem;
  font-size: 1.125rem;
`;

const Statement = styled.div`
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  font-size: 5.0625rem;
  line-height: 5.1328rem;
  font-weight: 600;
  letter-spacing: -0.1406rem;
  text-shadow: 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.4);

  @media (max-width: 83rem) {
    /* Max/min font size :: reference formula: https://css-tricks.com/snippets/css/fluid-typography/ */
    font-size: calc(2.6875rem + 35 * ((100vw - 20rem) / 1000));
    line-height: calc(1.1em + 0.5vw);
  }
`;

class HomeHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      windowHeight: "",
      domNode: ""
    };
  }

  render() {
    const { pretext, missionStatement } = this.props;
    return (
      <Container>
        <Parallax
          offsetYMin={-50}
          offsetYMax={50}
          slowerScrollRate
          disabled={isMobile}
        >
          <WithBackground />
        </Parallax>
        <MissionBlock>
          <PreText>{pretext}</PreText>
          <Statement>{missionStatement}</Statement>
        </MissionBlock>
      </Container>
    );
  }
}

export default HomeHeader;
