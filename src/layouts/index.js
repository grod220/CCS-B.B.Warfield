import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { ParallaxProvider } from "react-scroll-parallax";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Navigation />
    <ParallaxProvider>{children()}</ParallaxProvider>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
