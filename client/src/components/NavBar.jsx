import React from "react";
import { Link } from "react-router-dom";

const styles = {
  title: {
    fontFamily: 'Quicksand', 
  },
  maintitle: {
    fontFamily: 'Quicksand', 
    fontWeight: 'bold'
  },
};

class NavBar extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/" style={styles.maintitle}>
    Google Book Search
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <Link to="/search" className="navbar-item" style={styles.title}>
        Search
      </Link>

      <Link to="/saved"className="navbar-item" style={styles.title}>
        Saved
      </Link>
    </div>

  </div>
</nav>
</>

         );
    }
}
 
export default NavBar;