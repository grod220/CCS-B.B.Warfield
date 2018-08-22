import React from "react";
import styled from "styled-components";

import BibleImg from "../../images/homepage-bible-open.jpg";
import FeatureWithBackground from "../shared/featureWithBackground";

const CustomStyle = styled.div`
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  line-height: 4.4375rem;
  font-weight: 600;
  font-style: normal;
`;

const EnglishBold = styled.span`
  font-weight: 700;
  font-style: italic;
  position: relative;
  white-space: nowrap;
`;

const SummaryBlock = () => (
  <FeatureWithBackground image={BibleImg}>
    <CustomStyle>
      We are an <EnglishBold>english-speaking</EnglishBold> church in the heart
      of Stockholm, brought and bound together by one person: Jesus.
    </CustomStyle>
  </FeatureWithBackground>
);

export default SummaryBlock;
