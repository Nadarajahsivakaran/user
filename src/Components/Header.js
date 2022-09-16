import React from 'react';
import { Navbar , Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" >
        <Container>
          <Navbar.Brand className='m-auto'>
            Title
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
