import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import axios from 'axios'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        axios
            .get(`http://localhost:5000/todos`)
            .then((res) => {
                setTodos(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err.message)
            })
    }, [])
    return (
        <>
            {loading ? (
                <>
                    <div className="loader"></div>
                    <div className="loader"></div>
                    <div className="loader"></div>
                    <div className="loader"> </div>
                    <div className="loader"></div>
                </>
            ) : <Todo todos={todos} />}
        </>


    )
}

export default TodoList