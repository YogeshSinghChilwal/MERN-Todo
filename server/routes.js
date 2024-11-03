import express from 'express'
const router = express.Router()
import {ObjectId} from 'mongodb'

import {getConnectedClient} from './database.js'

const getCollection = () => {
    const client = getConnectedClient()
    const collection = client.db("todosdb").collection("todos")

    return collection
}


// GET /todos

router.get("/todos", async(req, res) => {

    const collection = getCollection()
    const todos = await collection.find({}).toArray()

    res.status(200).json(todos)
})

// POST /todos

router.post("/todos", async(req, res) => {

    const collection = getCollection()
    let {todo} = req.body

    if(!todo){
        return res.status(400).json({mssg: "Error no todo found"})
    }

    todo = (typeof todo === "string") ? todo : JSON.stringify(todo)

    const newTodo = await collection.insertOne({todo, status: false})

    res.status(201).json({todo, status: false, _id: newTodo.insertedId})

    // try {
    //     // Insert todo with `status` field set to `false`
    //     const result = await collection.insertOne({ todo, status: false });
    
    //     // Return a consistent `_id` field in response
    //     res.status(201).json({ _id: result.insertedId, todo, status: false });
    //   } catch (error) {
    //     console.error("Error inserting todo:", error);
    //     res.status(500).json({ mssg: "Internal server error" });
    //   }
})

// DELETE /todos/:id

router.delete("/todos/:id", async(req, res) => {

    const collection = getCollection()
    const _id = new ObjectId(req.params.id)

    const deletedTodo = await collection.deleteOne({ _id });


    res.status(200).json(deletedTodo)
})

// PUT /todos/:id

router.put("/todos/:id", async(req, res) => {

    const collection = getCollection()
    const _id = new ObjectId(req.params.id)

    const {status} = req.body

    if(typeof status !== "boolean"){
        return res.status(400).json({mssg: "Error invalid status"})
    }
    
    const updatedTodo = await collection.updateOne({_id}, {$set: {status: !status}})

    res.status(200).json(updatedTodo)
})

export default router