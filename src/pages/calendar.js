import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/shared/layout'
import Hero from '../images/calendar-group-pic.jpg'
import HeaderBlock from '../components/shared/headerBlock'
import CalHighlight from '../components/calendar/calHighlight'
import CalendarEvents from "../components/calendar/calendarEvents";
import StayInTouchAlt from '../components/calendar/stayInTouchAlt'
// {data: {allGoogleSheetCalendarRow : {edges}}}
const Calendar = ({
  data: {
    site: { siteMetadata },
    allGoogleSheetCalendarRow: { edges }
  },
}) => (
  <Layout>
    <Helmet
      title={siteMetadata.calendar.title}
      meta={[siteMetadata.meta.keywords, siteMetadata.calendar.description]}
    />
    <HeaderBlock img={Hero} titleText="Upcoming Events" />
    <CalHighlight />
    <CalendarEvents events={edges.map(edge => edge.node)} />
    <StayInTouchAlt />
  </Layout>
)

export default Calendar

export const pageQuery = graphql`
  query {
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
    site {
      siteMetadata {
        calendar {
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
