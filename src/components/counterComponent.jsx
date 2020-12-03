import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
    // imageUrl: "https://picsum.photos/200",
  };

  ////binding event handlers
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  handleIncrement = () => {
    console.log("increment clicked");
  };
  // styles = {
  //   fontSize: 30,
  //   fontWeight: "bold",
  // };
  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
