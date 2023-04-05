import React from "react";
import { useState } from "react";

const TaskCreate = ({ createTask, task, taskFormUpdate, editTaskById }) => {
  const [taskDesc, setTaskDesc] = useState(task ? task.task : "");
  const [header, setHeader] = useState(task ? task.header : "");

  const handleChange = (e) => {
    setHeader(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskFormUpdate) {
      editTaskById(task.id, header, taskDesc);
    } else {
      createTask(header, taskDesc);
    } //!prop lifting up
    setTaskDesc("");
    setHeader("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="taskUpdateContainer">
          <h3 className="header">Please Update your Task</h3>

          <form onSubmit={handleSubmit} className="taskCreaterForm">
            <label className="taskLabel"> Update your Header</label>
            <input
              className="taskInput"
              value={header}
              onChange={handleChange}
            />
            <label className="taskLabel">Update your Task</label>
            <textarea
              className="taskInput"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            />
            <button className="updateButton" type="submit">
              Update
            </button>
          </form>
        </div>
      ) : (
        <div className="taskCreateContainer">
          <h3 className="header">Please Create a Task</h3>

          <form onSubmit={handleSubmit} className="taskCreaterForm">
            <label className="taskLabel">Header</label>
            <input
              className="taskInput"
              value={header}
              onChange={handleChange}
            />
            <label className="taskLabel">Enter a Task</label>
            <textarea
              className="taskInput"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            />
            <button className="taskButton" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskCreate;
