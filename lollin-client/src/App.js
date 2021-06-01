import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";
import MainPage from "./pages/Main/Main.jsx";
import ItemsDB from "./pages/ItemsDB/ItemsDB.jsx";
import ChampDB from "./pages/ChampDB/ChampDB.jsx";
import ChampDetail from "./pages/ChampDetail/ChampDetail.jsx";
import UserInfo from "./pages/UserInfo/UserInfo.jsx";

import Navbar from "./component/Navbar/NavbarFixed";
import FooterFixed from "./component/Footer/FooterFixed";
import SidebarDropdown from "./component/Sidebar/SidebarDropdown";

import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import Myinfo from "./pages/User/MyInfo";

const server = process.env.REACT_APP_SERVER_URL;
function App() {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [champPriId, setChampPriId] = useState("Aatrox");
  const [nickName, setNickName] = useState("");
  const [nickNameResult, setNickNameResult] = useState();
  const [jwt, setJwt] = useState("");
  const [isLogin, setisLogin] = useState(false);

  const [loginOn, setLoginOn] = useState(false);
  const [signupOn, setSignupOn] = useState(false);

  const handleJwt = (jwt) => {
    setJwt(jwt);
  };
  history.handleJwt = handleJwt;
  history.handleLogin = setisLogin;
  history.jwt = jwt;
  history.setJwt = setJwt;
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChampPriId = (id) => {
    setChampPriId(id);
    history.push("/champions/detail");
  };

  const handleSearchChange = (event) => {
    setNickName(event.target.value);
  };

  const handleSearchClick = () => {
    axios
      .get(`${server}/utils/search?name=${decodeURI(nickName)}`)
      .then((res) => {
        setNickNameResult(res.data);
        console.log(res);
      });
    history.push("/userinfo");
  };

  return (
    <div className="Container">
      <Navbar
        toggle={toggle}
        loginOn={loginOn}
        setLoginOn={setLoginOn}
        signupOn={signupOn}
        setSignupOn={setSignupOn}
        isLogin={isLogin}
        setisLogin={setisLogin}
        setJwt={setJwt}
        jwt={jwt}
      />
      <SidebarDropdown
        isOpen={isOpen}
        toggle={toggle}
        loginOn={loginOn}
        setLoginOn={setLoginOn}
        signupOn={signupOn}
        setSignupOn={setSignupOn}
        isLogin={isLogin}
        setisLogin={setisLogin}
        setJwt={setJwt}
        jwt={jwt}
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
      <Route
        exact
        path="/user/login"
        render={() => <Login history={history} />}
      />
      <Route
        exact
        path="/user/signup"
        render={() => <Signup history={history} />}
      />
      <Route
        exact
        path="/user/update"
        render={() => <Myinfo history={history} />}
      />
      <Route exact path="/userinfo" render={() => <UserInfo />} />
      <FooterFixed />
    </div>
  );
}

export default App;
