import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 3,
        unique: true,
    }

},
    {
        timestamps: true
    }
)

export const Todo = mongoose.model("todo", todoSchema);
