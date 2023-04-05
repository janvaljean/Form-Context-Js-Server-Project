import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks ,onDelete }) => {
  
  return (
    <div className="taskList">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
