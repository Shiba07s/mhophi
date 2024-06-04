import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <Navbar
      className={`header ${className}`}
      bg="light"
      expand="lg"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <h1 className="project-name" style={{ color: "#82659C" }}>
            MHOPHI
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#" className="dashboard">
              Dashboard
              <img className="frameIcon" alt="" src="/frame.svg" />
            </Nav.Link>
            <Nav.Link href="#">Order&apos;s Product Details</Nav.Link>
          </Nav>
          <div className="rectangleParent">
            <div className="groupChild" />
            <img
              className="magnifyingGlass1Icon"
              alt=""
              src="/magnifyingglass-1.svg"
            />
            <div className="searchForSomething">Search for something</div>
          </div>
          <Nav>
            <Nav.Link href="#">
              <img className="headerItem" alt="" src="/group-4.svg" />
            </Nav.Link>
            <Nav.Link href="#">
              <img className="headerInner" alt="" src="/group-3.svg" />
            </Nav.Link>
            <Nav.Link href="#">
              <img className="maskGroupIcon" alt="" src="/mask-group@2x.png" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
