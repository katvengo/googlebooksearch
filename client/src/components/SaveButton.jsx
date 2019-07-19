import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveButton(props) {
  return (
    <button type="button" className="button is-warning" id={props.id} key={props.id} onClick={props.onPress}>
      Save
    </button>
  );
}

export default SaveButton;
