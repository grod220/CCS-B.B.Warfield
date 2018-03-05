import React from "react";
import Link from "gatsby-link";

const IndexPage = ({ data: { contentYaml } }) => (
  <div>
    <h1>Hi people</h1>
    <h3>Service times: {contentYaml.service_times}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;

export const query = graphql`
  query ServiceTimesQuery {
    contentYaml {
      service_times
    }
  }
`;
