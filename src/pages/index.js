import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Helmet from "react-helmet";

import HeaderBlock from "../components/homepage/headerBlock";
import ServiceTimes from "../components/homepage/serviceTimes";
import WhiteContentBlock from "../components/shared/whiteContentBlock";

const IndexPage = ({ data: { contentYaml } }) => (
  <div>
    <Helmet
      title="You've made it to the homepage"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <HeaderBlock
      missionStatement={contentYaml.mission.mission_statement}
      pretext={contentYaml.mission.pretext}
    />
    <WhiteContentBlock title={"Service Times"}>
      <ServiceTimes serviceTimes={contentYaml.service_times} />
    </WhiteContentBlock>
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
