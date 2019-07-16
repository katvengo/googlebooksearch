import React from "react";

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
      <a className="navbar-item" href="/" style={styles.title}>
        Search
      </a>

      <a className="navbar-item" href="/" style={styles.title}>
        Saved
      </a>
    </div>

  </div>
</nav>
</>

         );
    }
}
 
export default NavBar;