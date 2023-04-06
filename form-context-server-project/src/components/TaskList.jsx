import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import TasksContext from "../context/task";


const TaskList = () => {
   const { tasks } = useContext(TasksContext);
  
  return (
    <div className="taskList">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          
        />
      ))}
    </div>
  );
};

export default TaskList;
