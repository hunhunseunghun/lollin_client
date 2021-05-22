import "./App.css";
import React, { useState } from 'react';
import { Route } from "react-router-dom";
import MainPage from "./pages/Main/Main.jsx";
import ItemsDB from "./pages/ItemsDB/ItemsDB.jsx";
import Navbar from "./component/Navbar/NavbarFixed";
import FooterFixed from "./component/Footer/FooterFixed";
import SidebarDropdown from "./component/Sidebar/SidebarDropdown";



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="Container">
      <Navbar toggle={toggle} />
      <SidebarDropdown isOpen={isOpen} toggle={toggle} />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/items" component={ItemsDB} />
      <FooterFixed />
    </div>
  );
}

export default App;
