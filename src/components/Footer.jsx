import React from "react";

const day = new Date();
const currentYear = day.getFullYear();
const currentMonth = day.getMonth() + 1;
const currentDay = day.getDate();
const Footer = () => (
  <footer id="app-footer">
    &copy; {`${currentYear}.${currentMonth}.${currentDay}`}
  </footer>
);
export default Footer;
