import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

import { useEffect, useContext } from "react";
import TasksContext, { Provider } from "./context/task";

function App() {
  const { fetchTasks } = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
        <TaskCreate />
        <TaskList />
    </div>
  );
}

export default App;
