import React from "react";
import SavedResults from "../components/SavedResults"
import API from '../utils/API'

class Saved extends React.Component {
    state = { 
        book: {}
     }
     componentDidMount() {
        API.getSavedBooks(this.props.match.params.id)
          .then(res => this.setState({ book: res.data }))
          .catch(err => console.log(err));
      }
    render() { 
        return ( 
            <>
             {this.state.books.map(book => (
                <div key={book.id}>
                <SavedResults
                  id={book.id}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  link={book.volumeInfo.infoLink}
                  
                /> 
                 </div>
                  ))}
            </>
         );
    }
}
 
export default Saved;