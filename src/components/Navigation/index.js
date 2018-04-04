import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
require("typeface-open-sans");
require("typeface-open-sans-condensed");

const Container = styled.div`
  position: absolute;
  width: 70rem;
  margin: 2.5rem auto 0;
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
  font-size: 1.2rem;
  letter-spacing: 0.3rem;
`;

const Nav = styled.ul`
  list-style-type: none;
  width: 34rem;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 600;
  letter-spacing: 0.12rem;
  font-size: 0.875rem;
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
