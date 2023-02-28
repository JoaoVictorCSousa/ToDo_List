import React from 'react';
import "./AddButton.css";
import { Button } from '../button/Button';

const AddButton = () =>{
    return (
        <div className='button-container'>
        <input className='add-button-input' type="text" />;
        <div className='add-task-button-container'>
        <Button>Adicionar</Button>
        </div>
        </div>
    );
}

export {AddButton};