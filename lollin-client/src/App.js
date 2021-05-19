import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/Main/Main.jsx";
import ItemsDB from "./pages/ItemsDB/ItemsDB.jsx";
import Navbar from "./component/Navbar/NavbarFixed";

function App() {
  return (
    <div className="Container">
      <Navbar/>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/items" component={ItemsDB} />
    </div>
  );
}

export default App;
