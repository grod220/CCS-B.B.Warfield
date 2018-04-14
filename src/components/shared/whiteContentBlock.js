import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
    width: 1000px;
`;

const Title = styled.h1`
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2813rem;
  font-size: 1.125rem;
  color: #848484;
`;

const WhiteContentBlock = ({ children, title }) => (
  <OuterContainer>
    <InnerContainer>
      <Title>{title}</Title>
      {children}
    </InnerContainer>
  </OuterContainer>
);

export default WhiteContentBlock;
