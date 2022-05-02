import { Component } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
export default class Container extends Component {
  state = {
    id: 1,
    tasks:[]
  };
  addTaskInState = (title) => {
    this.setState(state => {
      return {
        id: state.id + 1,
        tasks:[
          ...state.tasks,
          {num: state.id, title,}
        ]
      }
    })
  }
  removeTask = (id) => {
    const task = [...this.state.tasks];
    const filteredTask = task.filter(item => item.num !== parseInt(id))
    this.setState(state => {
      return {
        ...state,
        tasks:filteredTask
      }
    })
  }
  render() {
    return (
      <div className="bd">
        <AddTask addTaskInState={this.addTaskInState}/>
        <Tasks tasks={this.state.tasks} removeTask={this.removeTask} />
      </div>
    );
  }
}
