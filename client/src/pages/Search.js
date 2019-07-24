import React, { Component } from "react";
import Results from "../components/Results";
import API from "../utils/API";
import SaveButton from '../components/SaveButton'

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
class Search extends Component {
  state = {
    search: "",
    books: [],
    book: "",
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
 favoriteBook(data) {
    var book = {
        title: data.title,
        authors: data.authors,
        description: data.description,
        image: data.imageLinks.thumbnail,
        link: data.previewLink
    };
          API.saveBook(book)
           .then(
             console.log(book)

           )
           .catch(err => {
            console.log(err)
            })
}
  
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
              {this.state.books.map((book, index) => (
                <div key={index}>
                <SaveButton onClick={ () => this.favoriteBook(book.volumeInfo)} />
                <Results 
                  book={book.volumeInfo}
                  id={book.id}
                  image={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail  : '' } 
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors ? book.volumeInfo.authors.toString()  : ''}
                  description={book.volumeInfo.description}
                  link={book.volumeInfo.infoLink}
                /> 
                 </div>
                  ))}

            </div>
          </section>
      </>
    );
  }
}

export default Search;