import React from "react";
import styled from "styled-components";

import SubheadHighlight from "../shared/subheadHighlight";

const Text = styled.p`
  margin-bottom: 0;
`;

const GivingHighlight = () => (
  <SubheadHighlight color="#50a1da">
    <Text>
      Giving serves two main purposes. It is the means of which we can maintain
      ministries and help those in need. It also is an act of personal trust in
      God and worship.
    </Text>
  </SubheadHighlight>
);

export default GivingHighlight;
