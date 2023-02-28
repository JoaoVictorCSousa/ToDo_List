import React, { useState } from "react";
import "./App.css";
import { Tasks } from "./components/tasks/Tasks";
import {AddButton} from "./components/addButton/AddButton";

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
 
  return ( 

    <>

    <div className="container">
      <AddButton />
      <Tasks  tasks={tasks}/>
    </div>
   

    
    </>
 
  )
}

export default App;