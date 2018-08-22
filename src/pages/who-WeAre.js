import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/shared/layout'
import Hero from '../images/who-we-are-hat.jpg'
import HeaderBlock from '../components/shared/headerBlock'
import TheBeginning from '../components/whoWeAre/theBeginning'
import OurMission from '../components/whoWeAre/ourMission'
import OurPastor from '../components/whoWeAre/ourPastor'
import CoreValues from '../components/shared/coreValues'
import ChurchFamilyPic from '../components/whoWeAre/churchFamilyPic'
import BiblePromo from '../components/whoWeAre/biblePromo'

const WhoWeAre = ({
  data: {
    site: { siteMetadata },
  },
}) => (
  <Layout>
    <Helmet
      title={siteMetadata.whoWeAre.title}
      meta={[siteMetadata.meta.keywords, siteMetadata.whoWeAre.description]}
    />
    <HeaderBlock img={Hero} titleText="" />
    <TheBeginning />
    <OurMission />
    <OurPastor />
    <CoreValues />
    <ChurchFamilyPic />
    <BiblePromo />
  </Layout>
)

export default WhoWeAre

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        whoWeAre {
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
