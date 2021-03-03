import React, { Component } from "react";

class AllTasks extends Component {
  render() {
    const { taskList } = this.props;
    return (
      <>
        <table class="table ">
          <tbody>
            {taskList.map((task) => (
              <tr key={task.id}>
                <td>
                  <span className="mt-3">{task.taskTitle}</span>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm float-right mr-2"
                    onClick={() => this.props.handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default AllTasks;
