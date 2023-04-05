import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, deleteTaskById, editTaskById }) => {
  return (
    <div className="taskList">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTaskById={deleteTaskById}
          editTaskById={editTaskById}
        />
      ))}
    </div>
  );
};

export default TaskList;
