import React from "react";
import styled from "styled-components";

import SubheadHighlight from "../shared/subheadHighlight";

const Text = styled.p`
  margin-bottom: 0;
`

const CalHighlight = () => (
  <SubheadHighlight color="#d2374f">
    <Text>
      From Sunday service to bible studies and fun outings, there is always
      something to look forward to at Calvary.
    </Text>
  </SubheadHighlight>
);

export default CalHighlight;
