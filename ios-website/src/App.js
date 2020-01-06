import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

import logo from "./logo.svg";
import "./App.css";

// Home Components
import HomePage from "./Components/Home/HomePage";

// Navigation
import Navbar from "./Navigation/Navbar";

// Components

// Forms
import LoginForm from "./Forms/LoginForm";
import SignupForm from "./Forms/SignupForm";

function App() {
  const getView = () => {
    return (
      <Switch>
        <Redirect exact from="/" to="/homepage/" />
        <Route path="/login/" component={LoginForm} />
        <Route path="/signup/" component={SignupForm} />
        <Route path="/homepage/" component={HomePage} />
      </Switch>
    );
  };
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* <div id="app" className="container-fluid">
          <span>&nbsp;</span>

          <div className="row"> */}
        <div className="content col-12">{getView()}</div>
        {/* </div> */}
        {/* </div> */}
      </header>
    </div>
  );
}

export default withRouter(observer(App));
