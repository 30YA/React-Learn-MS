import { Component } from 'react';

class AddTask extends Component {
  state = { 
    input: "",
   } 
  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  handleClick = () => {
    this.props.addTaskInState(this.state.input)
    this.setState({
      input: "",
    })
  }
  render() { 
    return (
      <div className="AddTask">
        <form action="">
          <input className="inputText" type="text" value={this.state.input} onChange={this.handleInput} />
          <input className="submit" type="button" value="Add Task" onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}
 
export default AddTask;