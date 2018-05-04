import React from "react";
import styled from "styled-components";

import BiblePic from "../../images/who-we-are-bible.jpg";
import FeatureBlock from "../shared/featureWithBackground";

const WhiteAnchor = styled.a`
  color: white;
`;

const BiblePromo = () => (
  <FeatureBlock image={BiblePic} disablePL>
    We are passionate about the bible.
    <br />
    <WhiteAnchor
      href="https://www.youtube.com/watch?v=LR4WfUCNfX4"
      target="_blank"
    >
      Here’s a great explanation why →
    </WhiteAnchor>
  </FeatureBlock>
);

export default BiblePromo;
