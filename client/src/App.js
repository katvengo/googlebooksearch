import React from "react";
import "./App.css";
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Search from './components/Search'
// import Saved from './components/Saved'

class App extends React.Component {
  componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
}
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};


  render() {
    return (
     <>
    <NavBar />
    <Hero />
    <Search />
     </>
    );
  }
}

export default App;
