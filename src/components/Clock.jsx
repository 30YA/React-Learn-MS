import { Component } from "react";

class Clock extends Component {
  state = {
    clickCount: 0
  }
  render() { 
    return ( 
      <div>
        <h1>you are clicked {this.state.clickCount} time</h1>
        <button onClick={this.handleClick}>asdasd</button>
      </div>
     );
  }
  handleClick = () => {
    this.setState((state) => {
      return {
        clickCount: state.clickCount + 1
      }
    })
  }
}
export default Clock;