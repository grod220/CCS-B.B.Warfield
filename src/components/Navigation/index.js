import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
import HamburgerIcon from "../../images/hamburger-icon.svg";
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

  @media (max-width: 83rem) {
    width: 95vw;
  }

  @media (max-width: 46.5625rem) {
    align-items: center;

    &:after {
      content: "";
      width: 2.1875rem;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }

  img {
    display: none;
    width: 2.1875rem;
    height: 2rem;
    margin: 0.25rem 0 0;
    opacity: .9;
    cursor: pointer;

    @media (max-width: 46.5625rem) {
      display: block;
    }
  }
`;

const BrandName = styled.h1`
  display: block;
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.35rem;
  letter-spacing: 0.3375rem;
  margin-right: 2rem;
  flex-shrink: 0;
  text-align: center;

  @media (max-width: 46.5625rem) {
    font-size: calc(1rem + 1.5vw);
    flex-shrink: 1;
    margin: 0 0.7rem;
  }
`;

const Nav = styled.ul`
  list-style-type: none;
  text-transform: uppercase;
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 600;
  letter-spacing: 0.135rem;
  font-size: 0.9844rem;
  text-align: right;
  margin-left: 0;

  @media (max-width: 46.5625rem) {
    display: none;
  }

  li {
    &:first-child {
      margin-left: 0;
    }
    display: inline-block;
    margin-left: 3rem;
  }
`;

const Navigation = () => (
  <Container>
    <img src={HamburgerIcon} alt="Menu icon" />
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
