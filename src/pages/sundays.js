import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby'

import Layout from '../components/shared/layout'
import HeaderBlock from "../components/shared/headerBlock";
import GatheringHighlight from "../components/sundays/gatheringHighlight";
import ServiceTimeAndLocation from "../components/sundays/serviceTimeAndLocation";
import HebrewsBlock from "../components/sundays/hebrewsBlock";
import WhatToExpect from "../components/sundays/whatToExpect";
import ListenToAService from "../components/sundays/listenToAService";
import MoreQuestions from "../components/sundays/moreQuestions";

import Hero from "../images/sundays-joe.jpg";

const Sundays = ({
  data: {
    site: { siteMetadata },
  },
}) => (
  <Layout>
<Helmet
      title={siteMetadata.sundays.title}
      meta={[siteMetadata.meta.keywords, siteMetadata.sundays.description]}
    />
    <HeaderBlock img={Hero} titleText="Sunday Gatherings" />
    <GatheringHighlight />
    <ServiceTimeAndLocation />
    <HebrewsBlock />
    <WhatToExpect />
    <ListenToAService />
    <MoreQuestions />
  </Layout>
);

export default Sundays;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        sundays {
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