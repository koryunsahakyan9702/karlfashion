import React from 'react'
import "./Main.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'
import { DropdownButton, NavDropdown } from 'react-bootstrap';
export default function MainMenu() {
  return (
    <div className="mainManu">
        <Link className='mainLink'>Home</Link>
        <NavDropdown title="PAGES" className="drop">
            <NavDropdown.Item className='mainItem' >HOME</NavDropdown.Item>
            <NavDropdown.Item className='mainItem'>SHOP</NavDropdown.Item>
            <NavDropdown.Item className='mainItem'>PRODUCT DETLIS</NavDropdown.Item>
            <NavDropdown.Item className='mainItem'>CART</NavDropdown.Item>
            <NavDropdown.Item className='mainItem'>CHECKOUT</NavDropdown.Item>
        
        </NavDropdown>
        <Link className='mainLink_shop'>
        <span className="karl-level">HOT</span>

            SHOES</Link>
        <Link className='mainLink'>DRESSES</Link>
        <Link className='mainLink'>CONTACT</Link>

    </div>
  )
}
