import React, {useState} from "react";

import { Link } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


const Navs = (props) => {


    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    return (
       
    <div>
        <Navbar color="light" light expand="md">
            <Link to="/">
                <NavbarBrand>
                    {/* <img className="yeet" src = {logo}/> */}
                </NavbarBrand>
            </Link>
            
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href='https://buildweek-parkpassport.github.io/ParkPassport-Landing-page/public/index.html' >Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='https://buildweek-parkpassport.github.io/ParkPassport-Landing-page/public/about.html' >About</NavLink>
                </NavItem>
                <NavItem>
                    <Link to='/login/'>
                        <NavLink >Login</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='/signup/'>
                        <NavLink >Signup</NavLink>
                    </Link>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    </div>

    )
}


export default Navs;