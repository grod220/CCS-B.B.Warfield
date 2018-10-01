import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Navigation from './navigation'
import ColorGenerator from '../shared/eventsUtil'

export default _ => (
  <StaticQuery
    query={graphql`
      query {
        allGoogleSheetCalendarRow {
          edges {
            node {
              date
            }
          }
        }
      }
    `}
    render={data => (
      <Navigation
        hasCalEntries={
          ColorGenerator.removeOldEvents(
            data.allGoogleSheetCalendarRow.edges.map(edge => edge.node)
          ).length
        }
      />
    )}
  />
)
