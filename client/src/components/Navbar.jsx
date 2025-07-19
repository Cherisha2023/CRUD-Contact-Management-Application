import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaAddressBook, FaPlus } from 'react-icons/fa'; // Using react-icons

const NavBar = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid="md">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <FaAddressBook className="me-2" />
          Contact Manager
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="main-navbar" />
        
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={location.pathname === '/'}
              className="mx-2"
            >
              Home
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/add" 
              active={location.pathname === '/add'}
              className="mx-2"
            >
              <Button variant="outline-light" size="sm">
                <FaPlus className="me-1" />
                Add Contact
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;