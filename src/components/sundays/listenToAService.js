import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";

import SundayPews from "../../images/sundays-pews.jpg";
import FeatureWithBackground from "../shared/featureWithBackground";

const WhiteAnchor = styled.a`
  color: white;
`;

const ListenToAService = () => (
  <FeatureWithBackground image={SundayPews} customHeight="300px">
    Listen to a service!{" "}
    <WhiteAnchor href="http://google.com" target="_blank">
      A message on Proverbs →
    </WhiteAnchor>
  </FeatureWithBackground>
);

export default ListenToAService;
