import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Header = () => (
  <header id="app-header">
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#/">Book Search</Navbar.Brand>
    </Navbar>
  </header>
);
export default Header;
