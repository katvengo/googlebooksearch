


export default {
    search: function(query) {
      return get(`https://www.googleapis.com/books/v1/volumes?q=search+${query}`
        );
    }
  };