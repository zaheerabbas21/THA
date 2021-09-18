import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleCounter = this.handleCounter.bind(this);
  }

  handleCounter() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <div class="counter">
        <button onClick={this.handleCounter}>{this.state.count}</button>
      </div>
    );
  }
}

export default Counter;
