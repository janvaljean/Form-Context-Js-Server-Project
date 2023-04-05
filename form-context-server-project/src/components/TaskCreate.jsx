import React from "react";
import { useState } from "react";

const TaskCreate = ({onCreate}) => {
  const [task, setTask] = useState("");
  const [header, setHeader] = useState("");

  const handleChange = (e) => {
    setHeader(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(header, task); //!prop lifting up
    setTask("");
    setHeader("");
  };

  return (
    <div className="taskCreateContainer">
      <h3 className="header">Please Create a Task</h3>

      <form onSubmit={handleSubmit} className="taskCreaterForm">
        <label className="taskLabel">Header</label>
        <input className="taskInput" value={header} onChange={handleChange} />
        <label className="taskLabel">Enter a Task</label>
        <textarea
          className="taskInput"
          rows={5}
          value={task}
          onChange={handleTaskChange}
        />
        <button className="taskButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskCreate;
