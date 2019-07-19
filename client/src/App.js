import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Search from './pages/Search'
import Saved from './pages/Saved'
// import Saved from './components/Saved'

class App extends React.Component {



  render() {
    return (
     <Router>
    <div>
    <NavBar />
    <Hero />
    <Route exact path="/search" component={Search}/>
    <Route exact path="/saved" component={Saved}/>
    </div>
     </Router>
    );
  }
}

export default App;

