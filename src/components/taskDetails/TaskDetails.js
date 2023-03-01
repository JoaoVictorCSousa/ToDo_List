import React from 'react';
import { Button } from '../button/Button';
import { useParams } from 'react-router-dom';
import "./TaskDetails.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';




const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
    
    return (


        <>
        <div className='back-button-container'>
            <Button onClick={handleBackButtonClick}>Back</Button>

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