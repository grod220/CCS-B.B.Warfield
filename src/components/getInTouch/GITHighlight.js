import React from "react";
import styled from "styled-components";

import SubheadHighlight from "../shared/subheadHighlight";

const Text = styled.p`
  margin-bottom: 0;
`;

const GITHighlight = () => (
  <SubheadHighlight color="#614e3a">
    <p>
      Whether you’re curious about the church, interested in visiting, or just
      want to have a coffee chat<br />---we’d love to talk to you.
    </p>
    <Text>Reach out to Joe Morell via email :: churchemail@gmail.com</Text>
  </SubheadHighlight>
);

export default GITHighlight;
