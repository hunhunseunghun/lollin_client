import "./App.css";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/Main/Main.jsx";
import ItemsDB from "./pages/ItemsDB/ItemsDB.jsx";
import ChampDB from "./pages/ChampDB/ChampDB.jsx";
import ChampDetail from "./pages/ChampDetail/ChampDetail.jsx";

import Modal from "./component/Modal/Modal.jsx";
import Navbar from "./component/Navbar/NavbarFixed";
import FooterFixed from "./component/Footer/FooterFixed";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Container">
      <Navbar openModal={openModal} openModal={openModal} />
      <button onClick={openModal}>모달팝업</button>
      <Modal open={modalOpen} close={closeModal} header="Modal heading"></Modal>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/champions" component={ChampDB} />
      <Route exact path="/champions/detail" component={ChampDetail} />
      <Route exact path="/items" component={ItemsDB} />
      <FooterFixed />
    </div>
  );
}

export default App;
