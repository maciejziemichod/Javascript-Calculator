import React from "react";

export default function Button(props) {
  return (
    <button
      className={"button " + props.class}
      style={props.border}
      id={props.id}
    >
      {props.text}
    </button>
  );
}
