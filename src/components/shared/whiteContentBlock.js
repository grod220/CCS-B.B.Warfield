import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 78.75rem;
  padding: 5.9375rem 0;
  font-family: Crimson Text, georgia, serif;
  font-size: 1.25rem;
  color: #4f4f4f;
  line-height: 1.875rem;

  @media (max-width: 83rem) {
    width: 95vw;
  }
`;

const Title = styled.h1`
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  font-size: 1.625rem;
  text-align: center;
  color: #848484;
`;

const WhiteContentBlock = ({ children, title }) => (
  <OuterContainer>
    <InnerContainer>
      { title ? <Title>{title}</Title> : ""}
      {children}
    </InnerContainer>
  </OuterContainer>
);

export default WhiteContentBlock;
