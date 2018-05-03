import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";

const Container = styled.div`
  height: ${props => props.customHeight ? props.customHeight : "31.25rem"};
  width: 100vw;
  background-color: #096c85;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WithBackground = styled.div`
  background: url('${props => props.image}');
  width: 100vw;
  height: 37.5rem;
  background-size: cover;
  background-position: center;
`;

const HighlightText = styled.div`
  position: absolute;
  z-index: 100;
  color: white;
  font-size: 2.6875rem;
  width: 78.75rem;
  text-align: center;
  line-height: 3.4rem;
  font-style: italic;

  @media (max-width: 83rem) {
    width: 95vw;
    line-height: calc(1.1em + 0.5vw);
  }

  @media (max-width: 50rem) {
    font-size: 2.125rem;
  }
`;

const FeatureWithBackground = ({ children, image, customHeight, disablePL }) => (
  <Container customHeight={customHeight}>
    <HighlightText>{children}</HighlightText>
    <Parallax
      offsetYMin={-40}
      offsetYMax={40}
      slowerScrollRate
      disabled={isMobile || disablePL}
    >
      <WithBackground image={image} />
    </Parallax>
  </Container>
);

export default FeatureWithBackground;
