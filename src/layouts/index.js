import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Navigation />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
