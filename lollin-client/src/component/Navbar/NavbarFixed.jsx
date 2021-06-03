import React, { useState } from "react";
import {
  Nav,
  Logo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavLoginBtn,
  NavSignupBtn,
} from "./NavbarFixedElements";
import Login from "../../pages/User/Login";
import ScrollToTop from "../../Scroll/ScrollToTop";

const Navbar = ({
  toggle,
  loginOn,
  setLoginOn,
  signUpOn,
  setSignupOn,
  jwt,
  isLogin,
  setisLogin,
  setJwt,
}) => {
  return (
    <>
      <Nav>
        <Bars onClick={toggle} />
        <Logo to="/" />
        <NavMenu>
          <NavLink to="/items/all">Item DB</NavLink>
          <NavLink to="/champions/all">Champ DB</NavLink>
          <NavLink to="/userinfo">User Info</NavLink>
        </NavMenu>
        <NavBtn>
          {isLogin ? (
            <NavLoginBtn
              to="/"
              onClick={() => {
                setisLogin(false);
                setJwt("");
              }}
            >
              Logout
            </NavLoginBtn>
          ) : (
            <NavLoginBtn to="/user/login">Login</NavLoginBtn>
          )}
          {isLogin ? (
            <NavSignupBtn to="/user/update">MyInfo</NavSignupBtn>
          ) : (
            <NavSignupBtn to="/user/signup">Signup</NavSignupBtn>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
