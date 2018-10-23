import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 180px;
`

const BigNum = styled.p`
  color: #8b7259;
  font-size: 82px;
`

const BigText = styled.p`
  margin-bottom: 0px;
`

const SmallText = styled.p`
  font-size: 22px;
`

const NumberBlock = ({num, bigText, smallText}) => (
  <Container>
    <BigNum>{num}</BigNum>
    <BigText>{bigText}</BigText>
    <SmallText>{smallText}</SmallText>
  </Container>
)

export default NumberBlock;
