import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Route, useHistory } from 'react-router-dom';
import MainPage from './pages/Main/Main.jsx';
import ItemsDB from './pages/ItemsDB/ItemsDB.jsx';
import ChampDB from './pages/ChampDB/ChampDB.jsx';
import ChampDetail from './pages/ChampDetail/ChampDetail.jsx';

import Modal from './component/Modal/Modal.jsx';
import Navbar from './component/Navbar/NavbarFixed';
import FooterFixed from './component/Footer/FooterFixed';
import SidebarDropdown from './component/Sidebar/SidebarDropdown';

import Login from './pages/User/Login';
import Signup from './pages/User/Signup';
import Myinfo from './pages/User/MyInfo';

const server = process.env.REACT_APP_SERVER_URL;
function App() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [champPriId, setChampPriId] = useState('Aatrox');
  const [nickName, setNickName] = useState('');
  const [nickNameResult, setNickNameResult] = useState();
  const [loginModalOn, setLoginModalOn] = useState(false);
  const [signUpModalOn, setSignUpModalOn] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChampPriId = (id) => {
    setChampPriId(id);
    history.push('/champions/detail');
  };

  const handleSearchChange = (event) => {
    setNickName(event.target.value);
  };

  console.log(nickName);
  console.log(nickNameResult);
  console.log(loginModalOn);

  const handleSearchClick = () => {
    axios
      .get(`${server}/utils/search?name=${decodeURI(nickName)}`)
      .then((res) => {
        setNickNameResult(res.data);
        console.log(res);
      });
    history.push('/matchinginfo');
  };

  return (
    <div className="Container">
      {/* <Navbar toggle={toggle} />
      <SidebarDropdown isOpen={isOpen} toggle={toggle} /> */}
      <Navbar
        toggle={toggle}
        loginModalOn={loginModalOn}
        setLoginModalOn={setLoginModalOn}
        signUpModalOn={signUpModalOn}
        setSignUpModalOn={setSignUpModalOn}
      />
      {/* {loginModalOn ? (<LoginModal show={loginModalOn} onHide={() => setLoginModalOn(false)} />)
        : ""}
      {signUpModalOn ? (<SignupModal show={signUpModalOn} onHide={() => setSignUpModalOn(false)} />) : ""} */}
      <SidebarDropdown
        isOpen={isOpen}
        toggle={toggle}
        loginModalOn={loginModalOn}
        setLoginModalOn={setLoginModalOn}
        signUpModalOn={signUpModalOn}
        setSignUpModalOn={setSignUpModalOn}
      />
      <Route
        exact
        path="/"
        render={() => (
          <MainPage
            handleSearchChange={handleSearchChange}
            handleSearchClick={handleSearchClick}
          />
        )}
      />
      <Route
        exact
        path="/champions/all"
        render={() => <ChampDB handleChampPriId={handleChampPriId} />}
      />
      <Route
        exact
        path="/champions/detail"
        // component={ChampDetail}
        // champPriId={champPriId}
        render={() => <ChampDetail champPriId={champPriId} />}
      />
      <Route exact path="/items/all" component={ItemsDB} />
      <Route exact path="/user/login" component={Login} />
      <Route exact path="/user/signup" component={Signup} />
      <Route exact path="/user/update" component={Myinfo} />
      {/* <FooterFixed /> */}
    </div>
  );
}

export default App;
