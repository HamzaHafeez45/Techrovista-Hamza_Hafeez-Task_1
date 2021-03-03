import React, { Component } from "react";
import "./App.css";
import AddTask from "./Components/addTask";
import AllTasks from "./Components/allTasks";

class Main extends Component {
  state = {
    taskList: [],
    taskTitle: "",
  };

  handleChange = (event) => {
    this.setState({ taskTitle: event.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let taskTitle = this.state.taskTitle;
    let taskList = [
      {
        id: Math.ceil(Math.random() * 1000),
        taskTitle: taskTitle,
      },
      ...this.state.taskList,
    ];
    this.setState({ taskList });
  };
  handleDelete = (id) => {
    const taskList = this.state.taskList.filter((x) => x.id !== id);
    this.setState({ taskList });
  };
  handleDeleteAll = () => {
    this.setState({ taskList: [] });
  };
  render() {
    const { taskList } = this.state;
    return (
      <>
        <div className="container-fluid text-center" id="header">
          <h3 className="display-4 font-weight-normal p-3">Todo Application</h3>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 offset-2">
              <button
                className="btn btn-md btn-danger w-25 mb-2"
                onClick={this.handleDeleteAll}
              >
                Delete All
              </button>
              <AddTask
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
              <AllTasks taskList={taskList} handleDelete={this.handleDelete} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
