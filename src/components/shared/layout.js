import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ParallaxProvider } from 'react-scroll-parallax'
import 'typeface-open-sans'
import 'typeface-open-sans-condensed'
import 'typeface-crimson-text'
import './layout.css'

import Footer from '../shared/footer'
import NavigationWrapper from '../shared/navigationDataWrapper'

const Container = styled.div`
  position: relative;
`

const Layout = ({ children }) => (
  <Container>
    <NavigationWrapper />
    <ParallaxProvider>{children}</ParallaxProvider>
    <Footer />
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
