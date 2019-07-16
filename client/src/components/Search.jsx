import React from "react";
import Results from './Results'

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
    state = { 
      search: ''
     }
     searchGoogle = query => {
      API.search(query)
        .then(res => this.setState({ results: res.data.data }))
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const name = event.target.name;
      this.setState({
        [name]: value
      });
    };
     handleFormSubmit = event => {
      event.preventDefault();
      this.searchGoogle(this.state.search);
    };

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
<span>
  <input className="input" 
  type="text" 
  placeholder="Search for a Book"
  style={styles.short}
  value={this.state.search}
  handleFormSubmit={this.handleFormSubmit}
  handleInputChange={this.handleInputChange}
  name="search"
  id="search"
  />
</span>
<span><button className="button is-info" style={styles.searchButton} onClick={this.handleFormSubmit} >
            Search
          </button></span>
</div>
  <section className="section">
    <div className="container">
      <h1 className="title">Results</h1>
          <Results />
      
    </div>
  </section>
</body>
            </>
         );
    }
}

export default Search;