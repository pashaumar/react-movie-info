import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Search from "./components/Search";
import MovieDetails from "./components/MovieDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
