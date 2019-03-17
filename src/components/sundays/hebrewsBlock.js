import React from "react";

import PewsImg from "../../images/sundays-pews.jpg";
import FeatureWithBackground from "../shared/featureWithBackground";

const HebrewsBlock = () => (
  <FeatureWithBackground image={PewsImg}>
    “And let us consider how to stir up one another to love and good works, not
    neglecting to meet together, as is the habit of some, but encouraging one
    another, and all the more as you see the Day drawing near.”
    <br />
    Hebrews 10:24-25
  </FeatureWithBackground>
);

export default HebrewsBlock;
