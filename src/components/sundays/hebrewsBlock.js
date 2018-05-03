import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from "react-device-detect";

import DayChurchBlur from "../../images/sundays-outside-blur.jpg";
import FeatureWithBackground from "../shared/featureWithBackground";

const HebrewsBlock = () => (
  <FeatureWithBackground image={DayChurchBlur}>
    “And let us consider how to stir up one another to love and good works, not
    neglecting to meet together, as is the habit of some, but encouraging one
    another, and all the more as you see the Day drawing near.”
    <br />
    Hebrews 10:24-25
  </FeatureWithBackground>
);

export default HebrewsBlock;
