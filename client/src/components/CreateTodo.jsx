import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateTodo = () => {
    const [todo, setTodo] = useState("");
    const navigate = useNavigate();

    const handleTodo = () => {
        const data = {
            todo
        }
        axios
            .post(`http://localhost:5000/todos`, data)
            .then(() => {
                window.location.reload();
            })
            .catch((err) => {
                alert("Enter a task!!")
                console.error(err)
            })
    }

    return (
        <>
            <div className='CreateTodo'>
                <input
                    type="text"
                    placeholder='Add something to do...'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button
                    onClick={handleTodo} >
                    Add
                </button>
            </div>
        </>

    )
}

export default CreateTodo