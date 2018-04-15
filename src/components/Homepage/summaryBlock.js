import React from "react";
import styled from "styled-components"

const Container = styled.div`
    height: 300px;
    width: 100vw;
    background-color: tomato;
`

const SummaryBlock = () => (
  <Container>
    I am the SummaryBlock!
  </Container>
);

export default SummaryBlock;
