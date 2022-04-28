import React from "react";
import { Component } from "react";
import Toggle from "./Toggle";
import Box from "./Box";

class Main extends Component {
  state = {
    boxes: [
      { id: 1, title: "Box 1" },
      { id: 2, title: "Box 2" },
      { id: 3, title: "Box 3" },
      { id: 4, title: "Box 4" },
    ],
    activeBox: [1, 2, 4],
  };
  togglehandler = (id) => {
    const activeBox = [...this.state.activeBox];
    if (activeBox.includes(id)) {
      activeBox.splice(activeBox.indexOf(id), 1);
    } else {
      activeBox.push(id);
    }
    // console.log(activeBox);
    this.setState((state) => {
      return {
        ...state.boxes,
        activeBox: activeBox,
      };
    });
  };
  render() {
    return (
      <React.Fragment>
        <Toggle
          boxes={this.state.boxes}
          activeBox={this.state.activeBox}
          togglehandler={this.togglehandler}
        />
        <Box boxes={this.state.boxes} activeBox={this.state.activeBox} />
      </React.Fragment>
    );
  }
}
// we can use React.Fragment or <>
export default Main;
