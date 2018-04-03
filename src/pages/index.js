import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";

const TempBlock = styled.div`
  height: 600px;
  width: 100%;
  background-color: black;
`;

const MissionBlock = styled.div`
  display: ${props => (props.isHomepage ? "block" : "none")};
  color: white;
  width: 70rem;
  margin-top: 9rem;
  z-index: 2;
`;

const PreText = styled.div`
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
`;

const Statement = styled.div`
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  font-size: 4.5rem;
  line-height: 4.5625rem;
  font-weight: 600;
  letter-spacing: -0.125rem;
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.4);
`;

const IndexPage = ({ data: { contentYaml, hero } }) => (
  <div>
    <Img
      sizes={hero.sizes}
      style={{
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh"
      }}
    />
    <h1>Hi people</h1>
    <h3>Service times: {contentYaml.service_times}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h3>Service times: {contentYaml.service_times}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h3>Service times: {contentYaml.service_times}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h3>Service times: {contentYaml.service_times}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h3>Service times: {contentYaml.service_times}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h3>Service times: {contentYaml.service_times}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h3>Service times: {contentYaml.service_times}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h3>Service times: {contentYaml.service_times}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h3>Service times: {contentYaml.service_times}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h3>Service times: {contentYaml.service_times}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h3>Service times: {contentYaml.service_times}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h3>Service times: {contentYaml.service_times}</h3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </div>
);

export default IndexPage;

export const query = graphql`
  query HeaderQuery {
    contentYaml {
      mission {
        pretext
        mission_statement
      }
    }
    hero: imageSharp(id: { regex: "/hero-night.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
