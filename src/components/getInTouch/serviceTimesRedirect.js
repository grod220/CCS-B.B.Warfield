import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import FeatureWithBackground from "../shared/featureWithBackground";
import CommunionPic from "../../images/get-in-touch-communion.jpg";

const WhiteAnchor = styled(Link)`
  color: white;
`;

const ServiceTimesRedirect = () => (
  <FeatureWithBackground image={CommunionPic} customHeight="300px">
    For service times, checkout <WhiteAnchor to="/sundays">the Sundays Page →</WhiteAnchor>
  </FeatureWithBackground>
);
export default ServiceTimesRedirect;
