import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router"

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link to="/" as={Link}>Acceuil</Nav.Link>
              <Nav.Link to="/category/clothes" as={Link}>Vêtements</Nav.Link>
              <Nav.Link to="/category/shoes" as={Link}>Chaussures</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header