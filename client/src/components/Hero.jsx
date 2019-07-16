import React from "react";


const styles = {
  title: {
    textAlign: 'center',
    fontSize: 35
   
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20
   
  },
};

class Hero extends React.Component {


    state = {  }
    render() { 
        return ( 
<section className="hero is-medium is-primary is-bold">
  <div className="hero-body">
    <div className="container">
      <h1 className="title" style={styles.title}>
        React Google Book Search
      </h1>
      <h2 className="subtitle" style={styles.subtitle}>
        A place to search and save books!
      </h2>
    </div>
  </div>
</section>
         );
    }
}
 
export default Hero;