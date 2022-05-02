import { Component } from "react";

class Tasks extends Component {
  state = {};
  handleDlete = (event) => {
    // console.log(event.target.dataset.id);
    this.props.removeTask(event.target.dataset.id)
  }
  render() {
    const Tasks = this.props.tasks.map((item) => {
      return (
        <tr>
          <td>{item.title}</td>
          <td className="xmark" onClick={this.handleDlete} data-id={item.num}>X</td>
        </tr>
      );
    });
    return (
      <div className="Tasks">
        <table className="">
          <tr>
            <th>Tasks</th>
            <th>Delete</th>
          </tr>
          {Tasks}
        </table>
      </div>
    );
  }
}

export default Tasks;
// function Tasks(props) {
//   const Tasks = props.tasks.map(item => {
//     return (
//       <tr>
//           <td>{item.num}</td>
//           <td>{item.title}</td>
//           <td className="xmark" onClick={}>X</td>
//         </tr>
//     )
//   })
//   return (
//     <div className="Tasks">
//       <table className="">
//         <tr>
//           <th>Num</th>
//           <th>Tasks</th>
//           <th>Delete</th>
//         </tr>
//         {Tasks}
//       </table>
//     </div>
//   );
// }

// export default Tasks;
