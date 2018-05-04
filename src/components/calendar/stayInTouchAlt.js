import React from "react";
import styled from "styled-components";

import FeatureBlock from "../shared/featureWithBackground";
import StayInTouch from "../shared/stayInTouch";
import OutdoorPic from "../../images/calendar-outdoor-group.jpg"

const Container = styled.div`
  width: 100vw;
  height: 500px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StayInTouchAlt = () => (
  <FeatureBlock title="Stay in touch" image={OutdoorPic}>
    <StayInTouch white/>
  </FeatureBlock>
);

export default StayInTouchAlt;
