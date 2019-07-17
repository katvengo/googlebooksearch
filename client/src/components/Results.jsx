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
          <strong><a href={props.link}> Book Title:{props.title}</a></strong> <br />
          <strong>Authors: {props.author}</strong>

          <br/>
            {props.description}
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