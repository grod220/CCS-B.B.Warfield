import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import HeaderBlock from "../components/Homepage/headerBlock";
import ServiceTimes from "../components/Homepage/serviceTimes";

const IndexPage = ({ data: { contentYaml } }) => (
  <div>
    <HeaderBlock
      missionStatement={contentYaml.mission.mission_statement}
      pretext={contentYaml.mission.pretext}
    />
    <ServiceTimes serviceTimes={contentYaml.service_times} />
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
