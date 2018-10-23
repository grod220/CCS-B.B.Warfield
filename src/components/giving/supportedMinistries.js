import React from "react";
import styled from "styled-components";

import FeaturedBlock from "../shared/featureWithBackground";
import EscalatorPic from "../../images/giving-escalator.jpg";

const TextStyling = styled.div`
  font-style: normal;
  font-size: 24px;
  line-height: 22px;
`;

const SupportedMinistries = () => (
  <FeaturedBlock title="Ministries we support" image={EscalatorPic} customHeight="400px">
    <TextStyling>
      <p>Local ministry</p>
      <p>Mission Org inc.</p>
      <p>Homes for the Volks</p>
      <p>????</p>
    </TextStyling>
  </FeaturedBlock>
);

export default SupportedMinistries;