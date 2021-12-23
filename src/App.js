/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { React } from "react";
import "./App.css";
import List from "./components/addToList/List";
import Login from "./components/Login";
import Checkout from "./components/addToList/Checkout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/addToList" exact element={<List />} />
        <Route path="/checkout" exact element={<Checkout />} />
      </Routes>
    </Router>
    // <>
    //   <List />
    // </>
  );
}

export default App;
