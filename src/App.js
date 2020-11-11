import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Header from "./Components/header";
import India from './Components/india';
import World from './Components/world';

class App extends Component {
  
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
            <India />
            </Route>
            <Route exact path="/india">
              <India />
            </Route>
            <Route exact path="/world">
              <World />
            </Route> 
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
