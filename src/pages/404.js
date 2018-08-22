import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/shared/layout'
import Hero from '../images/404-winter.jpg'
import HeaderBlock from '../components/shared/headerBlock'
import SubheadHighlight from '../components/shared/subheadHighlight'

const NotFoundPage = ({
  data: {
    site: { siteMetadata },
  },
}) => (
  <Layout>
    <Helmet
      title={siteMetadata.pageNotFound.title}
      meta={[siteMetadata.meta.keywords, siteMetadata.pageNotFound.description]}
    />
    <HeaderBlock img={Hero} titleText="404 error" />
    <SubheadHighlight color="gray">
      Hmmm... Page not found. Now where could that be?{' '}
      <span role="img" aria-label="hmm">
        🤔
      </span>
    </SubheadHighlight>
  </Layout>
)

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        pageNotFound {
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
