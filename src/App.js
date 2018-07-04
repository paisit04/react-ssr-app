import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Main App</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
