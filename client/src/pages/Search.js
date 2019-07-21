import React from "react";
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
class Search extends React.Component {
  state = {
    search: "",
    books: [],
    key: "",
    image: "",
    title: "",
    author: "",
    description: "",
    link: "",
    favorite: false
    
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

    // loadBooks = () => {
    //   API.getSavedBooks()
    //     .then(res =>
    //       this.setState({ 
    //       id: this.state.book.id,
    //       image: this.state.book.volumeInfo.imageLinks.thumbnail,
    //       title: this.state.book.volumeInfo.title,
    //       author: this.state.book.volumeInfo.authors,
    //       description: this.state.book.volumeInfo.description,
    //       link: this.state.book.volumeInfo.infoLink,
    //       favorite: true})
    //     )
    //     .catch(err => console.log(err));
    // };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGoogle(this.state.search);
  };

  favoriteBook = (id, e) => {
    e.preventDefault();
    console.log("something" + id)
      API.saveBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
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
              {this.state.books.map(book => (
                <div key={book.id}>
                <SaveButton id={book._id} key={book._id} onPress={(e) => this.favoriteBook(book.id, e)}  />
                <Results 
                  id={book.id}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors}
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
