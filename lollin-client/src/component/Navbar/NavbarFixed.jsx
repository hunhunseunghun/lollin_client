import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarFixedElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <NavLink to="/" activeStyle>
                    <h1>Lollin</h1>
                </NavLink>
                </NavMenu>
                <Bars />
                <NavBtn>
                    <NavBtnLink to="/user/signup">Signup</NavBtnLink>
                    <NavBtnLink to="/user/login">Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
