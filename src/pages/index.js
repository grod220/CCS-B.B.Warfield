import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";

const Container = styled.div`
  width: 70rem;
  margin: 2.5rem auto 0;
  left: 0;
  right: 0;
`;

const MissionBlock = styled.div`
  color: white;
  width: 70rem;
  position: absolute;
  bottom: 31%;
  margin: 0 auto 0;
  left: 0;
  right: 0;
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

const HeaderBlock = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 510px;
  z-index: -1;
  position: relative;

  /* Very hacky way of coercing gastby-image to be a background  */
  > div:first-child {
    position: absolute;
    width: 100%;
    height: 100%;

    > div {
      position: absolute;
      overflow: hidden;
      top: 0px;
      width: 100%;
      max-height: 100%;
      z-index: -1;
    }
  }
`;

const IndexPage = ({ data: { contentYaml, hero } }) => (
  <div>
    <HeaderBlock>
      <Img
        sizes={hero.sizes}
        style={{
          position: "absolute",
          top: 0,
          maxWidth: "100%",
          maxHeight: "100%",
          zIndex: -1
        }}
      />
      {/* <Container> */}
      <MissionBlock>
        <PreText>{contentYaml.mission.pretext}</PreText>
        <Statement>{contentYaml.mission.mission_statement}</Statement>
      </MissionBlock>
    </HeaderBlock>
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
    {/* </Container> */}
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
    hero: imageSharp(id: { regex: "/hero-night.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
