import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return <footer id="app-footer">&copy: {currentYear}</footer>;
};

export default Footer;
