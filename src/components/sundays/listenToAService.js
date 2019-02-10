import React from "react";
import styled from "styled-components";

import SundayPews from "../../images/sundays-pews.jpg";
import FeatureWithBackground from "../shared/featureWithBackground";
import John6Audio from "../../images/john-6-message.mp3"

const WhiteAnchor = styled.a`
  color: white;
`;

const ListenToAService = () => (
  <FeatureWithBackground image={SundayPews} customHeight="300px">
    Listen to a service!{" "}
    <WhiteAnchor href={John6Audio} target="_blank">
      A message on John 6 →
    </WhiteAnchor>
  </FeatureWithBackground>
);

export default ListenToAService;
