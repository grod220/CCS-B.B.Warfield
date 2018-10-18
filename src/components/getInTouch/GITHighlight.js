import React from 'react'
import styled from 'styled-components'

import SubheadHighlight from '../shared/subheadHighlight'

const Text = styled.p`
  margin-bottom: 0;
`

const GITHighlight = () => (
  <SubheadHighlight color="#614e3a">
    <Text>
      Reach out to us via email :: <b><i>calvarystockholm@gmail.com</i></b>
    </Text>
  </SubheadHighlight>
)

export default GITHighlight
