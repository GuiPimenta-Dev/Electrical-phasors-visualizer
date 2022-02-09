import React from "react";
import { Navbar } from "react-bootstrap";
import MyNavBar from "../Navbar/Navbar";

const Header = ({ label }) => {
  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Collapse className="justify-content-start">
        <MyNavBar />
      </Navbar.Collapse>

      <Navbar.Collapse className="justify-content-center">
        <label className="label-search">{label}</label>
      </Navbar.Collapse>

      <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
