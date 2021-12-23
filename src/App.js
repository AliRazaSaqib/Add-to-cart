/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { React } from "react";
import "./App.css";
import List from "./components/addToList/List";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />

        <Route
          path="/addToList"
          heading="Enter Text Here"
          exact
          element={<List />}
        />
      </Routes>
    </Router>
    // <>
    //   <List />
    // </>
  );
}

export default App;
