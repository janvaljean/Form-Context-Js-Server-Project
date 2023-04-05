import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  return (
    <div className="taskList">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
