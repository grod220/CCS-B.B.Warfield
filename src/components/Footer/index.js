import React from "react";

const Footer = () => {
  const rows = [];

  for (let i = 0; i < 100; i++) {
    rows.push(<div>I am the footer : row# {i}</div>)
  }

  return <div>{rows}</div>;
};

export default Footer;
