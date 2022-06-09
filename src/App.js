import React, { Component } from "react";
// import
export default class App extends Component {
  constructor(props){
    super(props);
    this.textinput = React.createRef(); //with creatRef 1
    this.setreftodiv = elemnt => { //with callBack Ref 1
      this.mydiv = elemnt
    }
  }
  sia = () => {
    this.textinput.current.focus();
    console.dir(this.textinput.current); //with creatRef 3
    console.dir(this.mydiv) //with callBack Ref 3
  }
  componentDidMount(){
    // console.dir(document.querySelector('.sia').target);
  }
  // state = {};
  render() {
    return (
      <>
        <input type="text" ref={this.textinput} /> {/* with creatRef 2*/}
        <div ref={this.setreftodiv}>asdasd</div> {/* with callBack Ref 2*/}
        <input className="sia" type="button" value="focus" onClick={this.sia} />
      </>
    );
  }
}
