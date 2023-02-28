import React, { useState } from 'react';
import "./AddButton.css";
import { Button } from '../button/Button';

const AddButton = ({handleTaskAddition}) =>{
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData("");
    }
    return (
        <div className='button-container'>
        <input onChange={handleInputChange} value={inputData} className='add-button-input' type="text" />;
        <div className='add-task-button-container'>
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
        </div>
    );
}

export {AddButton};