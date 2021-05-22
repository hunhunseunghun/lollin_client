import React, { useState } from 'react'
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn, NavLoginBtnLink, NavSignupBtnLink } from './NavbarFixedElements';
import sidebarMenu from '../Sidebar/SidebarMenu';

const Navbar = ({ toggle }) => {
    // const [isLogin, setLogin] = useState(false)
    // const [isSignup, setSignup] = useState(false)

    return (
        <>
            <Nav>
                <Bars onClick={toggle} />
                <Logo to="/" activeStyle>
                    <h1>Lollin</h1>
                </Logo>
                <NavMenu>
                    <NavLink to="/items/all">
                        Item DB
                    </NavLink>
                    <NavLink to="/champions/all">
                        Champ DB
                    </NavLink>
                    <NavLink to="/champions/detail">
                        Champ Details
                    </NavLink>
                    <NavLink to="/utils/search?name=${name}">
                        Matching Info
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavLoginBtnLink to="/user/login">Login</NavLoginBtnLink>
                    {/* {isLogin ? 'Login' : 'Logout'} */}
                    <NavSignupBtnLink to="/user/signup">Signup</NavSignupBtnLink>
                    {/* {isSignup ? 'Signup' : 'MyInfo'} */}
                </NavBtn>
            </Nav>
            {/* <Sidebar /> */}
        </>
    )
}

export default Navbar
