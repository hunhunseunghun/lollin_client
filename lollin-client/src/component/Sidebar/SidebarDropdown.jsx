import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sidebarMenu from '../Sidebar/SidebarMenu';
import { LoginButton, SignupButton } from './Button';

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const DropdownWrapper = styled.div`
`;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
    background-color: #a0a0a0;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SidebarDropdown = ({
  isOpen,
  toggle,
  loginOn,
  setLoginOn,
  signUpOn,
  setSignupOn,
  jwt,
  isLogin,
  setJwt,
  setisLogin
}) => {
  

  return (
    <>
      <DropdownContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle} />
        <DropdownWrapper>
          <DropdownMenu>
            {sidebarMenu.map((item, index) => (
              <DropdownLink to={item.link} key={index}>
                {item.title}
              </DropdownLink>
            ))}
          </DropdownMenu>
          <BtnWrap>
            {isLogin? <LoginButton to="/" onClick={() => {
            setisLogin(false)
            setJwt('')
          }}>Logout</LoginButton>
            : <LoginButton to="/user/login">Login</LoginButton>}
            {/* <LoginButton> 
              {loginOn ? 'Login' : 'Logout'}
            </LoginButton> */}
            {isLogin? <SignupButton to="/user/update">MyInfo</SignupButton>
            : <SignupButton to="/user/signup">Signup</SignupButton>}
            {/* <SignupButton>
              {signUpOn ? 'Signup' : 'MyInfo'}
            </SignupButton> */}
          </BtnWrap>
        </DropdownWrapper>
      </DropdownContainer>
    </>
  );
}

export default SidebarDropdown;
