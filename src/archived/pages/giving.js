import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../../components/shared/layout'
import Hero from '../images/giving-workshop.jpg'
import HeaderBlock from '../../components/shared/headerBlock'
import GivingHighlight from '../../components/giving/givingHighlight'
import AccountInfo from '../../components/giving/accountInfo'
// import SupportedMinistries from '../components/giving/supportedMinistries'
import HowWeSeeGiving from '../../components/giving/howWeSeeGiving'

const Giving = ({
  data: {
    site: { siteMetadata },
  },
}) => (
  <Layout>
    <Helmet
      title={siteMetadata.giving.title}
      meta={[siteMetadata.meta.keywords, siteMetadata.giving.description]}
    />
    <HeaderBlock img={Hero} titleText="Giving" />
    <GivingHighlight />
    <AccountInfo />
    {/* <SupportedMinistries /> */}
    <HowWeSeeGiving />
  </Layout>
)

export default Giving

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        giving {
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
