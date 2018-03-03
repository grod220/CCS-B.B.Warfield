import React from "react";
import Link from "gatsby-link";

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <h3>{data.site.siteMetadata.title}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;

export const query = graphql`
  query GetPageTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
