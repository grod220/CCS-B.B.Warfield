import React from 'react'
import styled from 'styled-components'

import TwoHalfWhiteBlock from '../shared/twoHalfWhiteBlock'
import PastorJoe from '../../images/get-in-touch-joe.jpg'

const Title = styled.h1`
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  font-size: 1.625rem;
  text-align: center;
  color: #848484;
`

const FamilyImg = styled.img`
  max-height: 500px;
`

const QuickHello = () => (
  <TwoHalfWhiteBlock>
    <FamilyImg src={PastorJoe} />
    <div>
      <Title>A quick hello from Joe</Title>
      <p>
        We welcome everyone at Calvary. We're all at different parts of our walk
        with Jesus and want to walk alongside you as we get to know him better
        together. Whether you’re curious about the church, interested in
        visiting, or just want to have a coffee chat---we’d love to talk to you.
      </p>
    </div>
  </TwoHalfWhiteBlock>
)

export default QuickHello
