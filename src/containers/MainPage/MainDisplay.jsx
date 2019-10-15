import React, { Component } from "react";
import "./MainDisplay.scss";

import Multiply from "../../components/Buttons/Multiply";
import Addition from "../../components/Buttons/Addition";
import Division from "../../components/Buttons/Division";
import Subtraction from "../../components/Buttons/Subtraction";

class MainDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Addition />
        <Subtraction />
        <Multiply />
        <Division />
      </div>
    );
  }
}

export default MainDisplay;
