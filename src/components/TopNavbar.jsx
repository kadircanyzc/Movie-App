import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import React from "react";

export default function TopNavbar(props) {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Movie</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/HarryPotter">Harry Potter</Nav.Link>
              <Nav.Link href="/Avengers">Avengers</Nav.Link>
              <Form className="form">
                <FormControl
                  type="search"
                  className="me-2"
                  aria-label="Search"
                  placeholder="Type to search..."
                  value={props.value}
                  onChange={(event) => props.setSearchValue(event.target.value)}
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
