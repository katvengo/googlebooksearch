
const APIKEY = AIzaSyA_h3gv4yQW7oofZttrlE7xSbQqbxeh72E

const BASEURL = AIzaSyA_h3gv4yQW7oofZttrlE7xSbQqbxeh72E

export default {
    search: function(query) {
      return get(BASEURL + query + APIKEY);
    }
  };