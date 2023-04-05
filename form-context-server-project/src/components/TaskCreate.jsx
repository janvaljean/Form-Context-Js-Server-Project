import React from "react";

const TaskCreate = () => {
  return (
    <div className="taskCreateContainer">
      <h3 className="header">
        Please Create a Task
      </h3>

      <form className="taskCreaterForm">
        <label className="taskLabel">Header</label>
        <input className="taskInput"  />
        <label className="taskLabel">Enter a Task</label>
        <textarea className="taskInput" rows={5} />
        <button className="taskButton" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaskCreate;
