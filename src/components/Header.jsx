import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header id="app-header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Book Search</Navbar.Brand>
      </Navbar>
    </header>
  );
};

export default Header;
