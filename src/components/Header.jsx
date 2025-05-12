import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink, useMatch } from "react-router"
import '../styles/header.css'

function Header() {
  const match = useMatch("/category/:categoryId");
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              {match && <div className="text-primary mx-3">Category: {match.params.categoryId}</div> }
              <Nav.Link to="/" as={NavLink}>Acceuil</Nav.Link>
              <Nav.Link to="/category/clothes" as={NavLink}>Vêtements</Nav.Link>
              <Nav.Link to="/category/shoes" as={NavLink}>Chaussures</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header