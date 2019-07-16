import React from "react";


const styles = {
  short: {
    textAlign: 'center',
    width: 600,
    marginLeft: 100,
  },
  title: {
    textAlign: 'center',
    marginTop: 55,
    marginLeft: 60,
    fontFamily: 'Quicksand', 

  },
  searchButton: {
    marginLeft: 25,
    marginRight: 25,
  },
};
class Search extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
<nav className="level">
  <div className="level-left">
    <div className="level-item">
      <p className="subtitle is-5" style={styles.title}>
      Book Search
      </p>
    </div>
  </div>
  </nav>

 <body>
<div> 
<span><input className="input" type="text" placeholder="Search for a Book" style={styles.short}/></span>
<span><button className="button is-info" style={styles.searchButton}>
            Search
          </button></span>
</div>
  <section className="section">
    <div className="container">
      <h1 className="title">Results</h1>
          Rendered Books
      
    </div>
  </section>
</body>
            </>
         );
    }
}

export default Search;