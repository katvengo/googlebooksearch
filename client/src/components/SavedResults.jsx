import React from "react";

function DeleteButton(props){
  return (
    <button className="button is-danger">Delete</button>
  )
}
class SavedResults extends React.Component {
    state = {  }
    render() { 
        return ( 
  <>
  <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.image} alt="book" />
      </figure>
    </div>
    <div className="media-content">
    <DeleteButton onClick={this.props.deleteById}/>
      <div className="content">
        <p>
          <strong><a href={this.props.link}> Book Title:{this.props.title}</a></strong> <br />
          <strong>Authors: {this.props.author}</strong>

          <br/>
            {this.props.description}
        </p>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
        </div>
      </nav>
    </div>
  </article>
</div>
            </>
         );
    }
}
 
export default SavedResults;