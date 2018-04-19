import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";

import WorshipImg from "../../images/homepage-worship.jpg";

const Container = styled.div`
  height: 31.25rem;
  width: 100vw;
  background-color: #dedede;
  position: relative;
  overflow: hidden;
`;

const WithBackground = styled.div`
  background: url('${WorshipImg}');
  width: 100vw;
  height: 37.5rem;
  background-size: cover;
  background-position: center;
`;

const PreFooterImg = () => (
  <Container>
    <Parallax
      offsetYMin={-40}
      offsetYMax={20}
      slowerScrollRate
      disabled={isMobile}
    >
      <WithBackground />
    </Parallax>
  </Container>
);

export default PreFooterImg;
