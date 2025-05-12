import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}>Acceuil</Nav.Link>
            <Nav.Link to="/clothes" as={Link}>Vêtements</Nav.Link>
            <Nav.Link to="/shoes" as={Link}>Chaussures</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header