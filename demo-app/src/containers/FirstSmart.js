import React, { Component, Fragment } from "react";
import { Demo } from "../components/Demo";
import { Output } from "../components/Output";

export class FirstSmart extends Component {
  constructor() {
    super();
    console.log("Constructor Call");
    this.counter = 0;
    this.state = { count: this.counter };
    this.increase = this.increase.bind(this);
  }

  //   increase = () => {
  //     // console.log(this);
  //     this.counter++;
  //     console.log("Counter ", this.counter);
  //   };

  increase() {
    // console.log(this);
    this.counter++;
    this.setState({ count: this.counter });
    console.log("Counter ", this.counter);
  }

  render() {
    console.log("Render Call");
    return (
      <Fragment>
        {/* <button onClick={this.increase.bind(this)}>Counter</button> */}
        {/* <button onClick={this.increase}></button>
        <h1>Counter = {this.counter}</h1> 
        <h1>Counter = {this.state.count}</h1> */}
        <Demo increase={this.increase} />
        <Output count={this.state.count} />
      </Fragment>
    );
  }
}
