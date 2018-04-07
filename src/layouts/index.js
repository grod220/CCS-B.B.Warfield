import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { ParallaxProvider } from "react-scroll-parallax";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./index.css";

import styled from "styled-components";
const Container = styled.div`
  position: relative;
`

const TemplateWrapper = ({ children }) => (
  <Container>
    <Navigation />
    <ParallaxProvider>{children()}</ParallaxProvider>
    <Footer />
  </Container>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
