import React from "react";
import styled from "styled-components";

import FeatureBlock from "../shared/featureWithBackground";
import TreesPic from "../../images/giving-trees.jpg";

const WhiteAnchor = styled.a`
  color: white;
`;

const Styling = styled.div`
  letter-spacing: 1px;
`;

const HowWeSeeGiving = () => (
  <FeatureBlock image={TreesPic} customHeight="330px">
    <Styling>
      Learn more about{" "}
      <WhiteAnchor href="http://www.spotify.com" target="_blank">
        we see giving →
      </WhiteAnchor>
    </Styling>
  </FeatureBlock>
);

export default HowWeSeeGiving;
