import React, { Component } from "react";
import Display from "./components/Display";
import ButtonsPanel from "./components/ButtonsPanel";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
    };
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  handleClear() {
    this.setState({ display: "0" });
  }

  handleNumbers(e) {
    const number = e.target.innerHTML;
    // if it starts with 0 it doesn't allow to begin with multiple of them
    if (this.state.display === "0") {
      this.setState({
        display: number,
      });
    } else {
      this.setState((state) => ({
        display: state.display + number,
      }));
    }
  }

  handleDecimal() {
    const { display } = this.state;
    // splits by everything that is not a number or dot
    const regex = /[^0-9.]/;
    const checkDisplay = display.split(regex);
    // then i check whether the last number in expression already contains decimal
    const last = checkDisplay[checkDisplay.length - 1];
    if (!last.includes(".")) {
      this.setState({ display: display + "." });
    }
  }

  handleOperators(e) {
    const operator = e.target.innerHTML;
    const { display } = this.state;
    let newDisplay = display;

    // unattractive way to prevent having too many operators in expression
    // it lets having for example 2+-2 which equals 0
    // it also changes double "-" to "+"
    if (operator === "-") {
      if (
        display.endsWith("+-") ||
        display.endsWith("X-") ||
        display.endsWith("/-")
      ) {
        newDisplay = newDisplay.slice(0, newDisplay.length - 2) + "-";
      } else if (display.endsWith("-")) {
        newDisplay = newDisplay.slice(0, newDisplay.length - 1) + "+";
      } else {
        newDisplay = newDisplay + "-";
      }
    } else {
      if (
        display.endsWith("+-") ||
        display.endsWith("X-") ||
        display.endsWith("/-")
      ) {
        newDisplay = newDisplay.slice(0, newDisplay.length - 2) + operator;
      } else if (
        display.endsWith("+") ||
        display.endsWith("-") ||
        display.endsWith("X") ||
        display.endsWith("/")
      ) {
        newDisplay = newDisplay.slice(0, newDisplay.length - 1) + operator;
      } else {
        newDisplay = newDisplay + operator;
      }
    }

    this.setState({ display: newDisplay });
  }

  handleEquals() {
    let { display } = this.state;
    // replacing X with * so that eval can compute it
    display = display.replace("X", "*");
    const result = eval(display).toString();
    this.setState({ display: result });
  }

  render() {
    return (
      <div className="calculator">
        <Display display={this.state.display} />
        <ButtonsPanel
          handleClear={this.handleClear}
          handleNumbers={this.handleNumbers}
          handleDecimal={this.handleDecimal}
          handleOperators={this.handleOperators}
          handleEquals={this.handleEquals}
        />
      </div>
    );
  }
}

export default App;
