import express from "express";
import { Todo } from "../models/todoModel.js";

const router = express.Router();

//route to create a todo
router.post('/', async (req, res) => {
    try {
        if (!req.body.todo) {
            return res.status(400).send({ message: "Empty field!" });
        }

        const newTodo = {
            todo: req.body.todo
        }
        const todo = await Todo.create(newTodo);
        res.status(200).send(todo);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: error.message })
    }
})

//route to get all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({
            count: todos.length,
            data: todos
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message })
    }
})

//route to get a single todo
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);

        res.status(200).json(todo)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
})

//route to update a todo
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.todo) {
            return res.status(400).send({ message: "Empyt field" });
        }
        const { id } = req.params;
        const result = await Todo.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).send({ message: "Todo not found." });
        }
        res.status(200).send({ message: "Todo updated successfully." })

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: error.message });
    }
})

//route to delete a todo 
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Todo.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: "Todo not found" });
        }

        res.status(200).send({ message: "Todo deleted successfully." })

    } catch (error) {
        console.error(error.message)
        res.status(500).send({ message: error.message })
    }
})
export default router;