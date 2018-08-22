import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby'

import CityScape from "../../images/sundays-city-scape.jpg";
import FeatureWithBackground from "../shared/featureWithBackground";

const CustomStyle = styled.div`
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  line-height: 3rem;
  font-style: normal;
  font-size: 34px;

  @media (max-width: 83rem) {
    line-height: calc(1.1em + 0.5vw);
  }

  @media (max-width: 50rem) {
    font-size: 28px;
  }
`;

const ItalicCursive = styled.i`
  font-family: Crimson Text, georgia, serif;
  letter-spacing: 1px;
`

const WhiteAnchor = styled(Link)`
  color: white;
`;
const MoreQuestions = () => (
  <FeatureWithBackground image={CityScape} disablePL>
    <CustomStyle>
      Have more questions? <br />Write us an email or send us a text, we’re here
      for you! <br />
      <WhiteAnchor to="/getintouch"><ItalicCursive>Get in touch →</ItalicCursive></WhiteAnchor>
    </CustomStyle>
  </FeatureWithBackground>
);

export default MoreQuestions;
