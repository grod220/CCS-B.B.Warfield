import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import HeaderBlock from "../components/shared/headerBlock"
import SubheadHighlight from "../components/sundays/subheadHighlight"
import ServiceTimeAndLocation from "../components/sundays/serviceTimeAndLocation"
import HebrewsBlock from "../components/sundays/hebrewsBlock"
import WhatToExpect from "../components/sundays/whatToExpect"
import ListenToAService from "../components/sundays/listenToAService"
import MoreQuestions from "../components/sundays/moreQuestions"

import Hero from "../images/homepage-bible-open.jpg"

const Sundays = () => (
  <div>
    <Helmet
      title="Calvary Stockholm :: Sunday Gatherings"
      meta={[
        {
          name: "description",
          content: "Learn about what Sundays are like at Calvary."
        }
      ]}
    />
    <HeaderBlock img={Hero} titleText="Sunday Gatherings" offsetMin={-40} offsetMax={0} />
    <SubheadHighlight />
    <SubheadHighlight />
    <SubheadHighlight />
    <SubheadHighlight />
    <SubheadHighlight />
    <ServiceTimeAndLocation />
    <HebrewsBlock />
    <WhatToExpect />
    <ListenToAService />
    <MoreQuestions />
  </div>
);

export default Sundays;
