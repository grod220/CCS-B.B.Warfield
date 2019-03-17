import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import { isMobile } from 'react-device-detect'

import RamenGroupPic from '../../images/homepage-ramen.jpg'

const Container = styled.div`
  height: 31.25rem;
  width: 100vw;
  max-width: 100%;
  background-color: #dedede;
  position: relative;
  overflow: hidden;
`

const WithBackground = styled.div`
  background: url('${RamenGroupPic}');
  width: 100vw;
  max-width: 100%;
  height: 37.5rem;
  background-size: cover;
  background-position: center;
`

const PreFooterImg = () => (
  <Container>
    <Parallax y={[-30, 0]} disabled={isMobile}>
      <WithBackground />
    </Parallax>
  </Container>
)

export default PreFooterImg
