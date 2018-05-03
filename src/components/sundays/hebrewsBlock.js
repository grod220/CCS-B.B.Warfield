import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";

import DayChurchBlur from "../../images/sundays-outside-blur.jpg";

const Container = styled.div`
  height: 31.25rem;
  width: 100vw;
  background-color: #096c85;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WithBackground = styled.div`
  background: url('${DayChurchBlur}');
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

const HebrewsBlock = () => (
  <Container>
    <HighlightText>
      “And let us consider how to stir up one another to love and good works,
      not neglecting to meet together, as is the habit of some, but encouraging
      one another, and all the more as you see the Day drawing near.”
      <br />
      Hebrews 10:24-25
    </HighlightText>
    <Parallax
      offsetYMin={-40}
      offsetYMax={40}
      slowerScrollRate
      disabled={isMobile}
    >
      <WithBackground />
    </Parallax>
  </Container>
);

export default HebrewsBlock;
