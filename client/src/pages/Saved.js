import React from "react";
import SavedResults from "../components/SavedResults"

class Saved extends React.Component {
    state = { 
        key: "",
        image: "",
        title: "",
        author: "",
        description: "",
        link: "",
     }

     loadBooks = () => {
        API.getSavedBooks()
          .then(res =>
            this.setState({ 
            id: this.state.book.id,
            image: this.state.book.volumeInfo.imageLinks.thumbnail,
            title: this.state.book.volumeInfo.title,
            author: this.state.book.volumeInfo.authors,
            description: this.state.book.volumeInfo.description,
            link: this.state.book.volumeInfo.infoLink,
            favorite: true})
          )
          .catch(err => console.log(err));
      };
      
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