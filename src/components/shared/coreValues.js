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
  opacity: 0.4;

  @media (max-width: 920px) {
    display: none;
  }
`

class CoreValues extends React.Component {
  constructor(props) {
    super(props)
    this.state = { windowWidth: this.getWidth() }
  }

  getWidth() {
    if (typeof window !== 'undefined') {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      )
    } else {
      return 1000
    }
  }

  render() {
    return (
      <FeaturedWithBackground
        title="Our core values"
        image={SkyBackground}
        customHeight={this.state.windowWidth <= 387 ? '49rem' : null}
        backgroundHeight={this.state.windowWidth <= 387 ? '49rem' : null}
        disablePL
      >
        <BlockWrapper>
          <NumberBlock
            num={1}
            bigText="Jesus Christ"
            smallText="our foundation"
          />
          <Separator />
          <NumberBlock num={2} bigText="God's word" smallText="our guide" />
          <Separator />
          <NumberBlock num={3} bigText="The Gospel" smallText="our anthem" />
          <Separator />
          <NumberBlock num={4} bigText="God's Glory" smallText="our aim" />
        </BlockWrapper>
      </FeaturedWithBackground>
    )
  }
}

export default CoreValues
