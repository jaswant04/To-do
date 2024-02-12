import React from 'react'
import CreateTodo from '../components/CreateTodo'
import TodoList from '../components/TodoList'

const Home = () => {
    return (
        <>
            <h1>Todo List App</h1>
            <CreateTodo />
            <TodoList />
        </>

    )


}

export default Home