import React from "react";

export default function Button(props) {
  return (
    <div className={"button " + props.class} style={props.border}>
      <span>{props.text}</span>
    </div>
  );
}
