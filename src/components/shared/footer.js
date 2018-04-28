import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  padding: 80px 0;
  background-color: #3f3f3f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;

  p {
    font-size: 21px;
    line-height: 36px;
  }

  p:nth-child(3) {
    margin-bottom: 0;
  }
`;

const ContentWrapper = styled.div`
  width: 78.75rem;

  @media (max-width: 83rem) {
    width: 95vw;
  }
`;

const BrandName = styled.h2`
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 0.4rem;
`;

const Footer = () => (
  <Container>
    <ContentWrapper>
      <BrandName>Calvary Stockholm</BrandName>
      <p>Circa 2007</p>
      <p>
        <i>
          "...turn your ear to wisdom and apply your heart to understanding...
          then you will understand the fear of the Lord and find the knowledge
          of God." - Proverbs 2
        </i>
      </p>
    </ContentWrapper>
  </Container>
);

export default Footer;
