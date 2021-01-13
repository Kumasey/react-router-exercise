import React, { Component } from "react";
import { Link } from "react-router-dom";

const Color = ({ color }) => (
  <Link to={`/colors/${color}`}>
    <li>{color}</li>
  </Link>
);

export class Colors extends Component {
  state = {
    colors: JSON.parse(localStorage.getItem("colors")) || [],
  };
  render() {
    const { colors } = this.state;
    const data = colors.map(({ colorValue, colorName }, index) => (
      <Color key={index} color={colorName} />
    ));
    return (
      <div className="color-container">
        <h1 className="title">Welcome to the color factory</h1>
        <Link to="/colors/new">
          <button>Add a color </button>
        </Link>
        <div className="color-containerr">
            <h3>PLEASE SELECT A COLOR</h3>
        <ul>{data}</ul>
        </div>
      </div>
    );
  }
}

export default Colors;
