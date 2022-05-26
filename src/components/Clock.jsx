import { Component } from "react";
import Time from "./Time";
class Clock extends Component {
  state = {
    showTime: true,
  };
  toggleBtn = () => {
      this.setState(state => {
          return {
              showTime: !state.showTime
          }
      })
  }
  render() {
    return (
      <div>
        {this.state.showTime && <Time />}
        <button onClick={this.toggleBtn}>{this.state.showTime ? 'Hide Time' : 'Show Time'}</button>
      </div>
    );
  }
}

export default Clock;
