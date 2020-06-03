import React from "react";
import Button from "./Button";

export default function ButtonsPanel() {
  // used for adding proper borders of buttons
  const borderStyle = "solid #3b5155 1px";

  return (
    <div className="buttons-panel">
      <Button
        text="AC"
        id="clear"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
        }}
        class="button-clear"
      />
      <Button
        text="/"
        id="divide"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderLeft: borderStyle,
          borderTop: borderStyle,
        }}
      />
      <Button
        text="X"
        id="multiply"
        border={{
          borderBottom: borderStyle,
          borderLeft: borderStyle,
          borderTop: borderStyle,
        }}
      />
      <Button
        text="7"
        id="seven"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
        }}
      />
      <Button
        text="8"
        id="eight"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        text="9"
        id="nine"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        text="-"
        id="subtract"
        border={{
          borderBottom: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />

      <Button
        text="4"
        id="four"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
        }}
      />
      <Button
        text="5"
        id="five"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        text="6"
        id="six"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        text="+"
        id="add"
        border={{
          borderBottom: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        text="1"
        id="one"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
        }}
      />
      <Button
        text="2"
        id="two"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        text="3"
        id="three"
        border={{
          borderBottom: borderStyle,
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        text="0"
        id="zero"
        border={{ borderRight: borderStyle, borderTop: borderStyle }}
        class="button-zero"
      />
      <Button
        text="."
        id="decimal"
        border={{
          borderRight: borderStyle,
          borderTop: borderStyle,
          borderLeft: borderStyle,
        }}
      />
      <Button
        text="="
        id="equals"
        border={{ borderTop: borderStyle, borderLeft: borderStyle }}
        class="button-equal"
      />
    </div>
  );
}