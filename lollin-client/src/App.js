import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { Route, useHistory } from "react-router-dom";
import MainPage from "./pages/Main/Main.jsx";
import ItemsDB from "./pages/ItemsDB/ItemsDB.jsx";
import ChampDB from "./pages/ChampDB/ChampDB.jsx";
import ChampDetail from "./pages/ChampDetail/ChampDetail.jsx";

import Modal from "./component/Modal/Modal.jsx";
import Navbar from "./component/Navbar/NavbarFixed";
import FooterFixed from "./component/Footer/FooterFixed";
import SidebarDropdown from "./component/Sidebar/SidebarDropdown";

const server = process.env.REACT_APP_SERVER_URL;
function App() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [champPriId, setChampPriId] = useState("Aatrox");
  const [champName, setChampName] = useState("");
  const [champResult, setChampResult] = useState();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChampPriId = (id) => {
    setChampPriId(id);
    history.push("/champions/detail");
  };

  const handleSearchChange = (event) => {
    setChampName(event.target.value);
  };

  console.log(champName);

  const handleSearchClick = () => {
    axios.get(`${server}/search?name=${champName}`).then((res) => {
      setChampResult(res.data);
      console.log(res);
    });
    // history.push("/matchinginfo");
    // history.push("./matchinginfo")
    //matching info page 로 이동
  };

  return (
    <div className="Container">
      <Navbar toggle={toggle} />
      <SidebarDropdown isOpen={isOpen} toggle={toggle} />
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

      {/* <FooterFixed /> */}
    </div>
  );
}

export default App;
