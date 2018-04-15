import React from "react";
import styled from "styled-components";
import "typeface-crimson-text";

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 78.75rem;
  padding: 70px 0;
  font-family: Crimson Text, georgia, serif;
  font-size: 20px;
  color: #4f4f4f;
  line-height: 30px;

  @media (max-width: 83rem) {
    width: 95vw;
  }
`;

const Title = styled.h1`
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 26px;
  text-align: center;
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
