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
  const deleteTaskById = (id) => {
    //! id lifting up
    //console.log(id);
    const filteredTasks = tasks.filter((task) => task.id !== id);
    //console.log(filteredTasks)
    setTasks(filteredTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      {/* //!prop lifting up */}
      <TaskList tasks={tasks} onDelete={deleteTaskById} />
    </div>
  );
}

export default App;
