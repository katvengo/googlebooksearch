
  import axios from "axios";

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=search+';

// Export an object with a "search" method that searches the API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  },
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  
  getSavedBooks: function(){
    return axios.get("/api/books")
  }
};