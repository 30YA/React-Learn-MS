import { Component } from "react";

class Clock extends Component{
  constructor(props){
    super(props);
    setInterval(() => this.tick(),1000);
  }
  state = {
    time: new Date()
  }
  render(){
    return(
      <div>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
      )
  }
  tick() {
    this.setState({
      time: new Date()
    });
  }
}
export default Clock;