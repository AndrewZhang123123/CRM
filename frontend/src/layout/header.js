import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useNavigate} from 'react-router-dom';
const Header = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }

  return (
    <Navbar collapseOnSelect expand="md" bg="info" variant="dark" className='px-2 py-2'>
        <Navbar.Brand style={{fontSize: '20px', fontWeight: 600}}>
            CRM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <LinkContainer to="/home">
                    <Nav.Link>Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/tickets">
                    <Nav.Link>Tickets</Nav.Link>
                </LinkContainer>
                
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;  
