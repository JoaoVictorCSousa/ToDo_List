import React, { useState } from "react";
import "./App.css";
import { Tasks } from "./components/tasks/Tasks";
import {AddButton} from "./components/addButton/AddButton";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: "Estudar programação",
      completed: false,
    },
    {
      id: '2',
      title: "Ler livros",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {...task, completed: !task.completed}

      return task
    }); 

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    },];

    setTasks(newTasks)

  };

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks)
  };
 
  return ( 

    <>

    <div className="container">
      <AddButton handleTaskAddition={handleTaskAddition}  />
      <Tasks  tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete} />
    </div>
   

    
    </>
 
  )
}

export default App;