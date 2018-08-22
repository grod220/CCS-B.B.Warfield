import React from "react";

import FeatureBlock from "../shared/featureWithBackground";
import StayInTouch from "../shared/stayInTouch";
import OutdoorPic from "../../images/calendar-outdoor-group.jpg"

const StayInTouchAlt = () => (
  <FeatureBlock title="Stay in touch" image={OutdoorPic}>
    <StayInTouch white/>
  </FeatureBlock>
);

export default StayInTouchAlt;
