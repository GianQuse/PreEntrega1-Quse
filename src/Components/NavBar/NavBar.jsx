import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from '../CartWidget/CartWidget';
import './style.css';

function NavBar() {
  const logo = "https://www.zarla.com/images/zarla-caballeros-1x1-2400x2400-20220322-bh6yhpdpxr898d7qx8my.png?crop=1:1,smart&width=250&dpr=2";
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <img className="logoNav" src={logo} alt="logo" />
          <Navbar.Brand href="#inicio">Men Indumentaria</Navbar.Brand>
          <Nav className="me-auto navi">
            <Nav.Link href="tienda">Tienda</Nav.Link>
            <Nav.Link href="#formal">Ropa Formal</Nav.Link>
            <Nav.Link href="#informal">Ropa Informal</Nav.Link>
            <Nav.Link href="./CartWidget/CartWidget.js">Carrito</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
    </>
        );
    }
    
export default NavBar;