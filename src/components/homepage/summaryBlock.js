import React from "react";
import styled from "styled-components";

import CongregationImg from "../../images/homepage-congregation.jpg";
import FeatureWithBackground from "../shared/featureWithBackground";

const CustomStyle = styled.div`
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-style: normal;
  line-height: 4.4375rem;

  @media (max-width: 50rem) {
    line-height: 3.125rem;
  }
`;

const EnglishBold = styled.span`
  font-weight: 700;
  font-style: italic;
  position: relative;
  white-space: nowrap;
`;

const SummaryBlock = () => (
  <FeatureWithBackground image={CongregationImg}>
    <CustomStyle>
      We are an <EnglishBold>English-speaking</EnglishBold> church in the heart
      of Stockholm, brought and bound together by one person: Jesus.
    </CustomStyle>
  </FeatureWithBackground>
);

export default SummaryBlock;
