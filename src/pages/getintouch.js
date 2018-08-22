import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/shared/layout'
import Hero from '../images/get-in-touch-capp.jpg'
import HeaderBlock from '../components/shared/headerBlock'
import GITHighlight from '../components/getInTouch/GITHighlight'
import QuickHello from '../components/getInTouch/quickHello'
import ServiceTimesRedirect from '../components/getInTouch/serviceTimesRedirect'

const GetInTouch = ({
  data: {
    site: { siteMetadata },
  },
}) => (
  <Layout>
    <Helmet
      title={siteMetadata.getInTouch.title}
      meta={[siteMetadata.meta.keywords, siteMetadata.getInTouch.description]}
    />
    <HeaderBlock img={Hero} titleText="Get in touch" />
    <GITHighlight />
    <QuickHello />
    <ServiceTimesRedirect />
  </Layout>
)

export default GetInTouch

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        getInTouch {
          title
          description {
            name
            content
          }
        }
        meta {
          keywords {
            name
            content
          }
        }
      }
    }
  }
`
