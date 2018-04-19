import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";

import BibleImg from "../../images/homepage-bible-open.jpg";

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
  background: url('${BibleImg}');
  width: 100vw;
  height: 37.5rem;
  background-size: cover;
  background-position: center;
`;

const HighlightText = styled.div`
  position: absolute;
  z-index: 100;
  color: white;
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  font-size: 2.6875rem;
  width: 78.75rem;
  text-align: center;
  line-height: 4.4375rem;
  font-weight: 600;

  @media (max-width: 83rem) {
    width: 95vw;
    line-height: calc(1.1em + 0.5vw);
  }

  @media (max-width: 50rem) {
    font-size: 2.125rem;
  }
`;

const EnglishBold = styled.span`
  font-weight: 700;
  font-style: italic;
  position: relative;
  white-space: nowrap;
`;

const SummaryBlock = () => (
  <Container>
    <HighlightText>
      We are an{" "}
      <EnglishBold>
        english-speaking 
      </EnglishBold>{" "}
      church in the heart of Stockholm, brought and bound together by one
      person: Jesus.
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

export default SummaryBlock;
