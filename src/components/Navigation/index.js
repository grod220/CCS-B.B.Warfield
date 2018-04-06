import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
import Hamburger from "./hamburger";
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
  z-index: 100;

  @media (max-width: 83rem) {
    width: 95vw;
  }

  @media (max-width: 46.5625rem) {
    align-items: center;

    &:after {
      content: "";
      width: 2.875rem;
    }
  }

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

const MobileMenu = styled.div`
  width: 100%;
  height: 100%;
  background-color: #212121;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: ${props => (props.mobileMenuActive ? 99 : -99)};
  transition: all 0.25s ease;
  opacity: ${props => (props.mobileMenuActive ? 0.98 : 0)};
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false
    };
  }

  toggleMobileMenu = status => () =>
    this.setState(prevState => ({
      showMobileMenu: status !== undefined ? status : !prevState.showMobileMenu
    }));

  render() {
    return (
      <div>
        <Container>
          <Hamburger
            mobileMenuActive={this.state.showMobileMenu}
            triggerFunc={this.toggleMobileMenu()}
          />
          <BrandName onClick={this.toggleMobileMenu(false)}>
            <Link to="/">Calvary Stockholm</Link>
          </BrandName>
          <Nav>
            <li>
              <Link to="/about" onClick={this.toggleMobileMenu(false)}>
                Sundays
              </Link>
            </li>
            <li>
              <Link to="/whoweare" onClick={this.toggleMobileMenu(false)}>
                Who we are
              </Link>
            </li>
            <li>
              <Link to="/calendar" onClick={this.toggleMobileMenu(false)}>
                Calendar
              </Link>
            </li>
            <li>
              <Link to="/giving" onClick={this.toggleMobileMenu(false)}>
                Giving
              </Link>
            </li>
            <li>
              <Link to="/getintouch" onClick={this.toggleMobileMenu(false)}>
                Get in touch
              </Link>
            </li>
          </Nav>
        </Container>
        <MobileMenu mobileMenuActive={this.state.showMobileMenu} />
      </div>
    );
  }
}

export default Navigation;
