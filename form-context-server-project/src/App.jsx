import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (header, task) => {
    const createdTasks = [
      ...tasks,
      {
        id: new Date().getMilliseconds(),
        header,
        task,
      },
    ];
    setTasks(createdTasks);
  };
  
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
