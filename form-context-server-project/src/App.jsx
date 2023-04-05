
import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'

function App() {
    const createTask = (header, task) => {
     console.log(header,task)
     
    };


  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <TaskList/>
    </div>
  )
}

export default App
