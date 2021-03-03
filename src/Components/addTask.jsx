import React, { Component } from "react";

class AddTask extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.handleSubmit} className="">
          <div className="row text-center">
            <div className="col-md-12 col-sm-12 mb-3">
              <input
                className="form-control border border-dark"
                type="text"
                name="taskTitle"
                id="todo-list-item"
                placeholder="Write your task here?"
                onChange={this.props.handleChange}
                required
              />
              <button type="submit" className="btn btn-success px-5 w-100 mt-1">
                Add
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default AddTask;
