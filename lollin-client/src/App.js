import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/Main/Main.jsx";
import ItemsDB from "./pages/ItemsDB/ItemsDB.jsx";
import Navbar from "./component/Navbar/NavbarFixed";
import FooterFixed from "./component/Footer/FooterFixed";



function App() {
  return (
    <div className="Container">
      <Navbar/>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/items" component={ItemsDB} />
      <FooterFixed />
    </div>
  );
}

export default App;
