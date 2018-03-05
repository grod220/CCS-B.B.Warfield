import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
require("typeface-open-sans");
require("typeface-open-sans-condensed");
import NighttimeHeroImg from "./test.png";

const Container = styled.div`
  margin-bottom: 1.45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props =>
    props.isHomepage
      ? `#111111 url(${NighttimeHeroImg}) no-repeat center 0`
      : ""};
  background-size: cover;
  background-position: 50%;
  height: ${props => (props.isHomepage ? "35rem" : "inherit")};
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70rem;
  margin-top: 2.5rem;
  a {
    text-decoration: none;
    color: ${props => (props.isHomepage ? "White" : "Black")};
  }
`;

const BrandName = styled.h1`
  display: block;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.20625rem;
`;

const Nav = styled.ul`
  list-style-type: none;
  width: 30.3125rem;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-family: "Open Sans Condensed", Arial, Helvetica, sans-serif;
  font-weight: 600;
  letter-spacing: 0.15rem;
  font-size: 0.875rem;
  li {
    display: inline;
  }
`;

const MissionBlock = styled.div`
  display: ${props => (props.isHomepage ? "block" : "none")};
  color: white;
  width: 70rem;
  margin-top: 9.6875rem;
`;

const PrepText = styled.div`
  font-family: "Open Sans Condensed", Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
`;

const Statement = styled.div`
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-size: 4.6rem;
  line-height: 4.5625rem;
  font-weight: 600;
  letter-spacing: -0.125rem;
`;

const Header = ({ isHomepage }) => (
  <Container isHomepage={isHomepage}>
    <TopContent isHomepage={isHomepage}>
      <BrandName>
        <Link to="/">Calvary Chapel Stockholm</Link>
      </BrandName>
      <Nav>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/giving">Giving</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/getintouch">Get in touch</Link>
        </li>
      </Nav>
    </TopContent>
    <MissionBlock isHomepage={isHomepage}>
      <PrepText>We are focused on God's mission for us:</PrepText>
      <Statement>Teach the Bible and have it transform our lives.</Statement>
    </MissionBlock>
  </Container>
);

export default Header;
