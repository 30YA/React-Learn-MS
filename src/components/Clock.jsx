import { Component } from "react";

class Clock extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this); //this is 1 solution for bind (This)
  }
  state = {
    clickCount: 0
  }
  render() { 
    return ( 
      <div>
        <h1>you are clicked {this.state.clickCount} time</h1>
        <button onClick={this.handleClick}>asdf</button>
        <div onClick={this.handleClick}>
          <a onClick={this.handleLink} href="https://google.com">google</a>
        </div>
        
      </div>
     );
  }
  handleClick(event) {
    this.setState((state) => {
      return {
        clickCount: state.clickCount + 1
      }
    })
  }
  handleLink = (event) => {
    event.preventDefault() // for disable all default event in browser
    event.stopPropagation() // for disable paent event
    console.log(event);
  }
}
export default Clock;