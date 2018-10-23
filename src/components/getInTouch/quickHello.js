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
        We welcome you to contact us or visit us on Sundays. We welcome people
        desiring to be part of a gospel-centered church, who want to grow in
        their faith and relationship with God. We welcome others who are
        seeking, searching for meanng beyond the here-and-now. We welcome
        skeptics who want to observe or interact with what seems so unlikely.
        For whatever reason you come, it is our hope and prayer that you will
        taste and see the goodness of God, in the simple gathering of ordinary
        people we call, Calvary Stockholm.
      </p>
    </div>
  </TwoHalfWhiteBlock>
)

export default QuickHello
