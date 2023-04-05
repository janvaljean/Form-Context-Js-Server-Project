import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  
  const [tasks, setTasks] = useState([]);

  const createTask = (header, task) => {
    setTasks([
      ...tasks,
      {
        id: new Date().getMilliseconds(),
        header,
        task,
      },
    ]);
  };

  const deleteTaskById = (id) => {
    //! id lifting up

    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  };

  const editTaskById = (id, header, taskDesc) => {
    //! id lifting up
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, header: header, task: taskDesc };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate createTask={createTask} />
      {/* //!prop lifting up */}
      <TaskList
        tasks={tasks}
        deleteTaskById={deleteTaskById}
        editTaskById={editTaskById}
      />
    </div>
  );
}

export default App;
