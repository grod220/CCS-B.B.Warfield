import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import FeatureWithBackground from "../shared/featureWithBackground";
import CommunionPic from "../../images/get-in-touch-communion.jpg";

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
`;

const WhiteAnchor = styled(Link)`
  color: white;
`;

const ServiceTimesRedirect = () => (
  <FeatureWithBackground image={CommunionPic} customHeight="300px">
    For service times, checkout <WhiteAnchor to="/sundays">the Sundays Page →</WhiteAnchor>
  </FeatureWithBackground>
);
export default ServiceTimesRedirect;
