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
  display: flex;

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 83rem) {
    width: 95vw;
  }

  @media (max-width: 53rem) {
    flex-direction: column;
    padding: 0;
  }
`;

const LeftSide = styled.div`
  flex-basis: 40%;
  @media (max-width: 53rem) {
    flex-basis: unset;
  }
`;

const RightSide = styled.div`
  text-align: center;
  padding: 50px;
  flex-basis: 60%;
  @media (max-width: 53rem) {
    flex-basis: unset;
  }
`;

const TwoHalfWhiteBlock = ({ children }) => (
  <OuterContainer>
    <InnerContainer>
      <LeftSide>{children[0]}</LeftSide>
      <RightSide>{children[1]}</RightSide>
    </InnerContainer>
  </OuterContainer>
);

export default TwoHalfWhiteBlock;
