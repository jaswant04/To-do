import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import todoRoutes from './routes/todoRoutes.js';

const app = express();

dotenv.config();

// middleware to parse json body
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type'],
})
);

app.get('/', (req, res) => {
    res.status(200).send("Todo list App");
})

// Route for todo crud
app.use('/todos', todoRoutes)

const PORT = process.env.PORT || 5100
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App is running at ${PORT}`);
        })
        console.log("App connected to the db")
    })
    .catch((err) => {
        console.error(err)
    })
