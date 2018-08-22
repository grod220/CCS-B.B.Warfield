import React from 'react'
import styled from 'styled-components'

import WhiteContentBlock from '../shared/whiteContentBlock'

const AlignCenter = styled.div`
  text-align: center;
`

const TheBeginning = () => (
  <WhiteContentBlock title="A cross-centered community">
    <AlignCenter>
      <p>
        We are a group of sinners, saved by the amazing grace of God, who desire
        to grow in our faith and become more like Jesus. We have different
        backgrounds, different ages, different cultures, different jobs, and
        different interests---but we are united and bonded together by the love
        of Christ. That makes all the difference in the world.
      </p>
    </AlignCenter>
  </WhiteContentBlock>
)

export default TheBeginning
