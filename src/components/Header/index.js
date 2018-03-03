import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
require("typeface-open-sans");

const Container = styled.div`
  background: #111111;
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: center;
  height: 35rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70rem;
  margin-top: 2.5rem;
`;

const BrandName = styled.h1`
  color: white;
  display: block;
  font-family: "Open Sans";
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.20625rem;
`;

const Nav = styled.ul`
  list-style-type: none;
  li {
    display: inline;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

const Header = () => (
  <Container>
    <Content>
      <BrandName>Calvary Chapel Stockholm</BrandName>
      <Nav>
        <li>
          <Link to="/">Home</Link>
        </li>
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
    </Content>
  </Container>
);

export default Header;
