import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
require("typeface-open-sans");
require("typeface-open-sans-condensed");

const Container = styled.div`
  position: absolute;
  width: 78.75rem;
  margin: 2.8125rem auto 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  a {
    text-decoration: none;
    color: white;
  }
`;

const BrandName = styled.h1`
  display: block;
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.35rem;
  letter-spacing: 0.3375rem;
`;

const Nav = styled.ul`
  list-style-type: none;
  width: 38.25rem;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 600;
  letter-spacing: 0.135rem;
  font-size: 0.9844rem;
  li {
    display: inline;
  }
`;

const Navigation = () => (
  <Container>
    <BrandName>
      <Link to="/">Calvary Stockholm</Link>
    </BrandName>
    <Nav>
      <li>
        <Link to="/about">Sundays</Link>
      </li>
      <li>
        <Link to="/whoweare">Who we are</Link>
      </li>
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
      <li>
        <Link to="/giving">Giving</Link>
      </li>
      <li>
        <Link to="/getintouch">Get in touch</Link>
      </li>
    </Nav>
  </Container>
);

export default Navigation;
