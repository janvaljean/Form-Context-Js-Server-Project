import React from "react";

const TaskCard = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  console.log(task);
  return (
    <div className="card">
      <h3 className="cardHeader">Your Task</h3>
      <p className="cardInfo">{task.header}</p>
      <h3 className="cardHeader">Task Details</h3>
      <p className="cardInfo">{task.task}</p>
      <div className="buttonContainer">
        <button className="editButton">Edit</button>
        <button onClick={handleDelete} className="deleteButton">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
