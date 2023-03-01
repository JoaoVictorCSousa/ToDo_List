import React from 'react';
import { Button } from '../button/Button';
import { useParams } from 'react-router-dom';
import "./TaskDetails.css";




const TaskDetails = () => {
    const params = useParams();
    
    return (


        <>
        <div className='back-button-container'>
            <Button>Back</Button>

        </div>
        <div className='task-details-container'>
            <p>
                <h2>{params.taskTitle} </h2>
            </p>
            <p>
                lorem
            </p>

        </div>
        </>
    )
}

export {TaskDetails};