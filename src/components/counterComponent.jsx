import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,

    // imageUrl: "https://picsum.photos/200",
  };

  ////binding event handlers
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  // styles = {
  //   fontSize: 30,
  //   fontWeight: "bold",
  // };
  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
