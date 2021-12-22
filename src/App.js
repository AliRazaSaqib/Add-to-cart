/** @format */

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { React } from "react";
import "./App.css";
import List from "./components/addToList/List";
import Login from "./components/Login";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <div className="App">
    //       <Login />
    //     </div>
    //     <Route
    //       path="/addToList"
    //       heading="Enter Text Here"
    //       exact
    //       component={List}
    //     />
    //   </Switch>
    // </Router>
    <>
      <List />
    </>
  );
}

export default App;
