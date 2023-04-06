import axios from "axios";
import { createContext, useState } from "react";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = async (header, task) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      header,
      task,
    });

    setTasks([...tasks, response.data]);
    fetchTasks();
  }

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    fetchTasks();
  };

  const editTaskById = async (id, header, taskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      header,
      task: taskDesc,
    });
    fetchTasks();
  };

  const values = {
    tasks,
    createTask,
    fetchTasks,
    editTaskById,
    deleteTaskById,
  };
  return (
    <TasksContext.Provider value={values}>{children}</TasksContext.Provider>
  );
}
export { Provider };
export default TasksContext;
