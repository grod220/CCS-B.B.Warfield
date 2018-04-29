import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 78.75rem;
  color: white;
  padding: 75px 20px;
  text-align: center;
  font-size: 23px;
  line-height: 33px;
  letter-spacing: 1.3px;

  @media (max-width: 83rem) {
    width: 95vw;
  }
`;

const SubheadHighlight = ({ children, color }) => (
  <Container color={color}>
    <Content>{children}</Content>
  </Container>
);

export default SubheadHighlight;
