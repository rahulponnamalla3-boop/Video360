import { faBell, faCirclePlus, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row, Form, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Header.css";
import React from "react";
import { Link } from "react-router-dom";

function Header({ toggleSidebar }) {
  return (
    <section
      style={{ backgroundColor: "#232323" }}
      className="py-2 position-sticky top-0 z-3"
    >
      <Container fluid>
        <Row className="align-items-center">
          {/* Left: Hamburger + Logo */}
          <Col
            lg={3}
            md={4}
            sm={12}
            className="text-lg-start text-center mb-2 mb-lg-0 d-flex align-items-center justify-content-lg-start justify-content-center"
          >
            {/* ✅ Hamburger icon (always visible beside logo) */}
           <Button
  variant="outline-light"
  onClick={toggleSidebar} // ✅ important
  style={{ border: 'none', background: 'none', color: 'white', marginRight: '10px', padding:'0' }}
>
  <FontAwesomeIcon icon={faBars} size="lg" />
</Button>

            <Link to="/">
              <img src="images/logo.png" alt="logo" width="30%" />
            </Link>
          </Col>

          {/* Center: Search Bar */}
          <Col lg={6} md={4} sm={12} className="mb-2 mb-lg-0 d-none d-sm-block">
            <Form className="d-flex justify-content-center">
              <Form.Control
                type="search"
                placeholder="Search for....."
                className=" text-white p-1"
                style={{
                  backgroundColor: "#121212",
                  
                  border: "1px solid black",
                  borderRadius: "0",
                  width: "90%",
                }}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className=" text-white p-2 searchicon"
                style={{
                  backgroundColor: "#323232ff",
                  
                  
                
                }}
              />
            </Form>
          </Col>

          {/* Right: Upload + Bell + Profile */}
          <Col lg={3} md={4} sm={12} className="text-lg-end text-center Headercss">
            <a href="">
              <FontAwesomeIcon icon={faCirclePlus} className="fs-6" />{" "}
              <span className="p-0">Upload Video</span>
            </a>
            
              <a href="#notifications" className="position-relative">
        
      {/* 2. The Bell Icon */}
      {/* Remove 'position-absolute' from the icon */}
      <FontAwesomeIcon icon={faBell} className="fs-6 ps-2 pe-4" /> 
      
      {/* 3. The Badge: Position it on the top-right corner of the bell */}
      <Badge
        bg="danger"
        pill // Makes it rounded
        // Positioning Classes:
        className="position-absolute top-0 start-50 translate-middle me-1 pb-2"
      >
        3+
        {/* Screen reader text for accessibility */}
        <span className="visually-hidden ">New notifications</span>
      </Badge>
    </a>
            <a href="">
              <img
                src="images/Digit.png"
                alt="Digitit"
                className="mx-2 "
                width="25px"
              />
              <span className="p-0">DIGITIT</span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header;