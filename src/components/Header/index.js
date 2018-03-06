import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
require("typeface-open-sans");
require("typeface-open-sans-condensed");

const Container = styled.div`
  margin-bottom: 1.45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: ${props => (props.isHomepage ? "35rem" : "7rem")};
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70rem;
  margin-top: 2.5rem;
  z-index: 2;
  a {
    text-decoration: none;
    color: ${props => (props.isHomepage ? "White" : "Black")};
  }
`;

const BrandName = styled.h1`
  display: block;
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.20625rem;
`;

const Nav = styled.ul`
  list-style-type: none;
  width: 25rem;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
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

const Header = ({ isHomepage, content, dataSizes }) => (
  <div>
    <Container isHomepage={isHomepage}>
      {isHomepage ? (
        <Img
          sizes={dataSizes}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
        />
      ) : (
        ""
      )}
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
        <PreText>{content.mission.pretext}</PreText>
        <Statement>{content.mission.mission_statement}</Statement>
      </MissionBlock>
    </Container>
  </div>
);

export default Header;
