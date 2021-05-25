import React, { useState } from 'react'
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn, NavLoginBtn, NavSignupBtn } from './NavbarFixedElements';
import SignupModal from "../../modals/SignupModal";
import LoginModal from "../../modals/LoginModal";


const Navbar = ({ toggle }) => {
    // const [isLogin, setLogin] = useState(false)
    // const [isSignup, setSignup] = useState(false)
    const [loginModalOn, setLoginModalOn] = useState(false);
    const [signUpModalOn, setSignUpModalOn] = useState(false);

    return (
        <>
            <LoginModal show={loginModalOn} onHide={() => setLoginModalOn(false)} />
            <SignupModal show={signUpModalOn} onHide={() => setSignUpModalOn(false)} />
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
                    <NavLoginBtn onClick={() => setLoginModalOn(true)}>
                        Login
                    </NavLoginBtn>
                    {/* {isLogin ? 'Login' : 'Logout'} */}
                    <NavSignupBtn onClick={() => setSignUpModalOn(true)}>
                        Signup
                    </NavSignupBtn>
                    {/* {isSignup ? 'Signup' : 'MyInfo'} */}
                </NavBtn>
            </Nav>
            {/* <Sidebar /> */}
        </>
    )
}

export default Navbar
