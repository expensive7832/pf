import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import Logo from "./../assets/logo.png"

function Header() {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () =>{ 
      setCollapsed(!collapsed)
    }
  return (
    <div>
      <Navbar expand={true} color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          <img src={Logo} alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className='m-auto'>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header