import React, { Component } from 'react';
class Time extends Component {
    state = {
        time: new Date().toLocaleTimeString()
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
            console.log(this.state.time);
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() { 
        return (
            <div>{this.state.time}</div>
        );
    }
}
 
export default Time;