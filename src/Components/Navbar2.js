import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar2.css';

function Navbar2() {
  return (
    <Navbar bg="light" expand="lg" className='navdesign'>
      <Container className='navbar'> 
        <Navbar.Brand>Smart Gardin system</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='hamburgermenu'/>
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-nav'>
          <Nav className="nav-links">
            <Nav.Link href="#hero">Hjem</Nav.Link>
            <Nav.Link href="#Vejr">Vejret</Nav.Link>
            <Nav.Link href="#om-os">Om os</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;