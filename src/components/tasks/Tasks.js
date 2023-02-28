import React from "react";
import {Task} from "../task/Task";

const Tasks = ({ tasks, handleTaskClick }) => {
    return(
        <>
        {tasks.map(task => 
        (<Task task={task} handleTaskClick={handleTaskClick} />))}
        </>
    )

}


export {Tasks};