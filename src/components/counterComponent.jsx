import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    // imageUrl: "https://picsum.photos/200",
  };
  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };
  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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
