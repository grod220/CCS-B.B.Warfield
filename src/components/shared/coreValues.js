import React from 'react'
import styled from 'styled-components'

import SkyBackground from '../../images/homepage-sky.jpg'
import FeaturedWithBackground from '../shared/featureWithBackground'
import NumberBlock from './numberBlock'

const BlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    max-width: 530px;
    margin: auto;

    > div {
      flex-grow: 1;
    }
  }
`
const Separator = styled.div`
  background: #8b7259;
  width: 2px;
  opacity: .4;

  @media (max-width: 920px) {
    display: none;
  }
`

const CoreValues = () => (
  <FeaturedWithBackground title="Our core values" image={SkyBackground}>
    <BlockWrapper>
      <NumberBlock num={1} bigText="Jesus Christ" smallText="our foundation" />
      <Separator />
      <NumberBlock num={2} bigText="God's word" smallText="our guide" />
      <Separator />
      <NumberBlock num={3} bigText="The Gospel" smallText="our anthem" />
      <Separator />
      <NumberBlock num={4} bigText="God's Glory" smallText="our aim" />
    </BlockWrapper>
  </FeaturedWithBackground>
)

export default CoreValues
