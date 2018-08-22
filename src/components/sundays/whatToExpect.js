import React from 'react'
import styled from 'styled-components'

import WhiteContentBlock from '../shared/whiteContentBlock'

const Container = styled.div`
  h3 {
    margin-bottom: 0;
  }
`

const WhatToExpect = () => (
  <WhiteContentBlock title={'What to expect'}>
    <Container>
      <h3>We Worship</h3>
      <p>
        We gather together to sing---in song we praise God and thank Him, and
        sing about Who He is and what He has done. In song, we remind each other
        of Who God is; His grace, His power, and His majesty. We glorify God
        through praise.
      </p>
      <h3>We Learn</h3>
      <p>
        After singing, we take time to focus on God's Word. We believe the Word
        of God is essential to our lives---to remind us, to encourage us, to
        instruct us, and guide us. As we apply God's Word to our lives, we are
        transformed, and drawn closer to Him. We glorify God through proclaiming
        His truth.
      </p>
      <h3>We Pray</h3>
      <p>
        We close our time by praying for one another. We take time to listen and
        pray for requests that are shared, and we bring these burdens and
        concerns to God. We glorify God through our dependence upon Him in
        prayer.
      </p>
    </Container>
  </WhiteContentBlock>
)

export default WhatToExpect
