import React, { useState, useEffect } from "react";
import "./App.css";
import { Tasks } from "./components/tasks/Tasks";
import {AddButton} from "./components/addButton/AddButton";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { TaskDetails } from "./components/taskDetails/TaskDetails";
import axios from "axios";


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

  useEffect(() => {
    const fetchTask = async () => {
    const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');

      setTasks(data);
      
    };

    fetchTask();

    },[]);

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

    <Router>

    <div className="container">

      
      < Header />
      <Route path="/" exact render={() => (
        <>

        <AddButton handleTaskAddition={handleTaskAddition}  />
        <Tasks  tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete} />
        </>
  )} />
    <Route path="/:taskTitle" exact component={TaskDetails} />

    </div>
   </Router>
 
  )
}

export default App;