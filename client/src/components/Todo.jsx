import React from 'react';
import axios from 'axios';

const Todo = ({ todos }) => {

    const deleteTodo = (todoId) => {
        axios
            .delete(`http://localhost:5000/todos/${todoId}`)
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
                alert(error);
            });
    };

    return (
        <table border={1} cellPadding={5} width="90%" className='table' >
            < tbody >
                {
                    todos.map((todo, index) => (
                        <tr key={todo._id}>
                            <td>{index + 1}. </td>
                            <td>{todo.todo}</td>
                            <td>
                                <button onClick={() => deleteTodo(todo._id)} id="delete" >
                                    ❌
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody >
        </table >
    );
};

export default Todo;
