import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Helmet from "react-helmet";

import HomeHeader from "../components/homepage/homeHeader";
import ServiceTimes from "../components/homepage/serviceTimes";
import WhiteContentBlock from "../components/shared/whiteContentBlock";
import SummaryBlock from "../components/homepage/summaryBlock";
import CalendarWidget from "../components/homepage/calendarWidget";
import CoreValues from "../components/shared/coreValues";
import StayInTouch from "../components/shared/stayInTouch";
import PreFooterImg from "../components/homepage/preFooterImg";

const IndexPage = ({ data: { contentYaml } }) => (
  <div>
    <Helmet
      title="Calvary Stockholm :: Building God's Kingdom"
      meta={[
        { name: "description", content: "We are an english-speaking church in the heart of Stockholm, brought and bound together by one person: Jesus. Come and see that the Lord is good." },
        { name: "keywords", content: "christian, church, god, jesus, stockholm, english" }
      ]}
    />
    <HomeHeader
      missionStatement={contentYaml.mission.mission_statement}
      pretext={contentYaml.mission.pretext}
    />
    <WhiteContentBlock title={"Service Times"}>
      <ServiceTimes serviceTimes={contentYaml.service_times} />
    </WhiteContentBlock>
    <SummaryBlock />
    <CalendarWidget />
    <CoreValues />
    <WhiteContentBlock title={"Stay in touch"}>
      <StayInTouch />
    </WhiteContentBlock>
    <PreFooterImg />
  </div>
);

export default IndexPage;

export const query = graphql`
  query HomepageQuery {
    contentYaml {
      mission {
        pretext
        mission_statement
      }
      service_times
    }
  }
`;
