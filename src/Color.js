import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class Color extends Component {
  state = {
    color: {},
  };
  componentDidMount() {
    const colors = JSON.parse(localStorage.getItem("colors")) || [];
    const { color } = this.props.match.params;
    const findColor = colors.find((item) => item.colorName === color);
    this.setState({
      color: findColor,
    });
  }

  render() {
    if (!this.state.color) {
      return <Redirect to="/" />;
    }
    // console.log(this.state.color.colorValue)
    return (
      <div
        className="color-details"
        style={{ background: this.state.color.colorValue }}
      >
        <h1>THIS IS {this.state.color.colorName} COLOR</h1>

        <h1> ISN'T IT BEAUTIFUL? </h1>
        <h1>
          {" "}
          <Link to="/">GO BACK</Link>
        </h1>
      </div>
    );
  }
}

export default Color;
