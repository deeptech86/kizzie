import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form, FormControl, Button } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import logo from "../logo.svg";
import "../Components/Menubar.css";

function Menubar() {
  return (
    <div className="menubar ">
      <Navbar>
        <Navbar.Brand href="#home">
          Kizzie
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        {/*  <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className=" justify-content-between px-2"
        >
          <Nav className="mr-auto justify-content-start" id="Nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Addition</Nav.Link>
            <Nav.Link href="#link">Subraction</Nav.Link>
            <NavDropdown title="Subjects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Logic Building
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Science</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline className="d-flex justify-content-between">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menubar;
