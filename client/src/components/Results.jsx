import React from "react";

function Results(props) {
  return (
  <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.image} alt="book" />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>Title={props.title}</strong> <br />
          <strong>author={props.author}</strong>

          <br/>
            Description={props.description}
        </p>
      </div>
      <nav className="level is-mobile">
        <div className="level-left">
        </div>
      </nav>
    </div>
  </article>
</div>
  )
    }

export default Results;