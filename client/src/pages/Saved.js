import React from "react";
import SavedResults from "../components/SavedResults"
import API from '../utils/API'
import DeleteButton from '../components/DeleteButton'

class Saved extends React.Component {
    state = { 
        books: []
     }
     componentDidMount() {
      this.getSavedBooks();
    }
  
    getSavedBooks = () => {
      API.getSavedBooks()
        .then(res =>
          this.setState({
            books: res.data
          })
        )
        .catch(err => console.log(err));
    };

    deleteBookById = id => {
      API.deleteBook(id).then(res => this.getSavedBooks());
    }
    render() { 
        return ( 
            <>
             {this.state.books.map((book, index) => (
                <div key={index}>
                <SavedResults
                  id={book.id}
                  image={book.image} 
                  title={book.title}
                  authors={book.authors.toString()}
                  description={book.description}
                  link={book.infoLink}
                  DeleteButton={() => (
                    <button
                      onClick={() => this.deleteBookById(book.id)}
                    >
                      Delete
                    </button>
                  )}                   />
                 </div>
                  ))}
            </>
         );
    }
}
 
export default Saved;