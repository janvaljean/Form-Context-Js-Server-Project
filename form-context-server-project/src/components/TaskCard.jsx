import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

const TaskCard = ({ task, deleteTaskById, editTaskById }) => {
  const [update, setUpdate] = useState(false);

  const handleDelete = () => {
    deleteTaskById(task.id);
  };

  const handleEdit = () => {
    setUpdate(!update);
  };

  const handleSubmit = (id, header, taskDesc) => {
    setUpdate(false);
    editTaskById(id, header, taskDesc);
  };

  return (
    <>
      <div className="card">
        {update ? (
          <TaskCreate
            task={task}
            taskFormUpdate={true}
            editTaskById={handleSubmit}
          />
        ) : (
          <div>
            <h3 className="cardHeader">Your Task</h3>
            <p className="cardInfo">{task.header}</p>
            <h3 className="cardHeader">Task Details</h3>
            <p className="cardInfo">{task.task}</p>
            <div className="buttonContainer">
              <button onClick={handleEdit} className="editButton">
                Edit
              </button>
              <button onClick={handleDelete} className="deleteButton">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskCard;
