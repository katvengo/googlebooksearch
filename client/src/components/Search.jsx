import React from "react";
import Results from "./Results";
import API from "../utils/API";

const styles = {
  short: {
    textAlign: "center",
    width: 600,
    marginLeft: 100
  },
  title: {
    textAlign: "center",
    marginTop: 55,
    marginLeft: 60,
    fontFamily: "Quicksand"
  },
  searchButton: {
    marginLeft: 25,
    marginRight: 25
  }
};
class Search extends React.Component {
  state = {
    search: "",
    books: []
  };
  searchGoogle = query => {
    API.search(query)
      .then(res => {
        console.log(res.data.items);
        this.setState({ books: res.data.items });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
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
              <input
                className="input"
                type="text"
                placeholder="Search for a Book"
                style={styles.short}
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                id="search"
              />
            </span>
            <span>
              <button
                className="button is-info"
                style={styles.searchButton}
                onClick={this.handleFormSubmit}
              >
                Search
              </button>
            </span>
          </div>
          <section className="section">
            <div className="container">
              <h1 className="title">Results</h1>
              {this.state.books.map(book => (
                <Results
                  image={book.volumeInfo.imageLinks.thumbnail}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                />
              ))}
              {/* {console.log("res data" + this.state.res.data)} */}
            </div>
          </section>
        </body>
      </>
    );
  }
}

export default Search;
