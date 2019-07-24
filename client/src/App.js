import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Search from './pages/Search'
import Saved from './pages/Saved'

function App() {
  return (
  
    <Router>
      <div>
      <NavBar/>
      <Hero />
        <Switch>
          <Route exact path="/Search" component={Search} />
          <Route exact path="/saved" component={Saved} />
         
          <Route component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

