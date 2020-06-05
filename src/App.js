import React, { Component } from "react";
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      display: "0",
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }

  handleClear() {
    this.setState({ value: 0, display: "0" });
  }

  handleNumbers(e) {
    const number = e.target.innerHTML;
    // if it starts with 0 it doesn't allow to begin with multiple of them
    if (this.state.display === "0") {
      this.setState((state) => ({
        display: number,
      }));
    } else {
      this.setState((state) => ({
        display: state.display + number,
      }));
    }
  }

  handleDecimal() {
    // checks whether there is a decimal point
    if (this.state.display.split("").includes(".")) {
      return;
    }
    this.setState((state) => ({ display: state.display + "." }));
  }

  render() {
    return (
      <div className="calculator">
        <Display display={this.state.display} />
        <ButtonsPanel
          handleClear={this.handleClear}
          handleNumbers={this.handleNumbers}
          handleDecimal={this.handleDecimal}
        />
      </div>
    );
  }
}

export default App;

// TODO

// Example: https://codepen.io/freeCodeCamp/pen/wgGVVX
// design https://uidesigndaily.com/posts/photoshop-calculator-day-319

// User Story #6: My calculator should contain an element to display values with a corresponding id="display".

// User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its
// initialized state; 0 should be shown in the element with the id of display.

// User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.

// User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and
// when I hit =, the correct result should be shown in the element with the id of display.

// User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

// User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number
// should not be accepted.

// User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

// User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered
// (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is
// entered, the result should be -25 (i.e. 5 x (-5)).

// User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the
// previous evaluation.

// User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no
//   exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

// Note On Calculator Logic: It should be noted that there are two main schools of thought on calculator input logic: immediate
// execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate
// execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different
//  results than ours for certain equations (see below example). As long as your math can be verified by another production calculator,
//  please do not consider this a bug.

// EXAMPLE: 3 + 5 x 6 - 2 / 4 =

// Immediate Execution Logic: 11.5
// Formula/Expression Logic: 32.5

// User Story #1: My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".
// User Story #2: My calculator should contain 10 clickable elements containing one number each from 0-9, with the following
// corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".
// User Story #3: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators
// with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".
// User Story #4: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding
// id="decimal".
// User Story #5: My calculator should contain a clickable element with an id="clear".
