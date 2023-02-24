import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavBarInfo from './NavBarInfo';

function NavBarComp() {
    return (
        <Navbar bg="dark" variant={"dark"} expand="lg" className="navbar">
          <Container>
            <Navbar.Brand href="/">Coctails Page</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/categories"}>All Categories</Nav.Link>
                <Nav.Link as={Link} to={"/glasses"}>All glasses</Nav.Link>
                <Nav.Link as={Link} to={"/ingredients"}>All ingredients</Nav.Link>
                <Nav.Link as={Link} to={"/bartender-beginner"}>Bartender beginner</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <NavBarInfo />
          </Container>
        </Navbar>
      );
};

export default NavBarComp;