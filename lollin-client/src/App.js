import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/Main/Main.jsx";
import ItemsDB from "./pages/ItemsDB/ItemsDB.jsx";

function App() {
  return (
    <div className="Container">
      <Route exact path="/" component={MainPage} />
      <Route exact path="/items" component={ItemsDB} />
    </div>
  );
}

export default App;
