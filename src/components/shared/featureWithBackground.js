import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import { isMobile } from 'react-device-detect'

const Container = styled.div`
  height: ${props => (props.customHeight ? props.customHeight : '31.25rem')};
  width: 100vw;
  max-width: 100%;
  background-color: #096c85;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const WithBackground = styled.div`
  background: url('${props => props.image}');
  width: 100vw;
  max-width: 100%;
  height: ${props => (props.customHeight ? props.customHeight : '37.5rem')};
  background-size: cover;
  background-position: center;
`

const HighlightText = styled.div`
  position: absolute;
  z-index: 100;
  color: white;
  font-size: 2.6875rem;
  width: 78.75rem;
  text-align: center;
  line-height: 3.4rem;
  font-style: italic;

  @media (max-width: 83rem) {
    width: 95vw;
    line-height: calc(1.1em + 0.5vw);
  }

  @media (max-width: 50rem) {
    font-size: 2.125rem;
  }
`

const Title = styled.h1`
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  font-size: 1.625rem;
  text-align: center;
  color: #848484;
  font-style: normal;
  color: white;
`

const FeatureWithBackground = ({
  children,
  image,
  customHeight,
  backgroundHeight,
  disablePL,
  title,
}) => (
  <Container customHeight={customHeight}>
    <HighlightText>
      {title ? <Title>{title}</Title> : ''}
      {children}
    </HighlightText>
    <Parallax
      offsetYMin={-40}
      offsetYMax={40}
      slowerScrollRate
      disabled={isMobile || disablePL}
    >
      <WithBackground image={image} customHeight={backgroundHeight} />
    </Parallax>
  </Container>
)

export default FeatureWithBackground
