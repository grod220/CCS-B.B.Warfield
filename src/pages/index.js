import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/shared/layout'
import HomeHeader from '../components/homepage/homeHeader'
import ServiceTimes from '../components/homepage/serviceTimes'
import SummaryBlock from '../components/homepage/summaryBlock'
import CalendarWidget from '../components/homepage/calendarWidget'
import CoreValues from '../components/shared/coreValues'
import StayInTouch from '../components/shared/stayInTouch'
import PreFooterImg from '../components/homepage/preFooterImg'
import WhiteContentBlock from '../components/shared/whiteContentBlock'
import ColorGenerator from '../components/shared/eventsUtil'

const IndexPage = ({
  data: {
    site: { siteMetadata },
    allGoogleSheetCalendarRow: { edges },
  },
}) => (
  <Layout>
    <Helmet
      title={siteMetadata.index.title}
      meta={[siteMetadata.meta.keywords, siteMetadata.index.description]}
    />
    <HomeHeader
      missionStatement="Love God, love others, and repent & believe the Gospel when we fail."
      pretext="We are focused on God's mission for us:"
    />
    <ServiceTimes />
    <SummaryBlock />
    {ColorGenerator.removeOldEvents(edges.map(edge => edge.node)).length && (
      <CalendarWidget events={edges.map(edge => edge.node)} />
    )}
    <CoreValues />
    <WhiteContentBlock title="Stay in touch">
      <StayInTouch />
    </WhiteContentBlock>
    <PreFooterImg />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        index {
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
    allGoogleSheetCalendarRow {
      edges {
        node {
          name
          description
          location
          date
          time
        }
      }
    }
  }
`
