import React from 'react'
import { Navbar, Container, Nav} from "react-bootstrap";

export default function () {
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}
