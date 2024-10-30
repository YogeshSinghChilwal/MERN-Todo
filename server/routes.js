import express from 'express'

const router = express.Router()

// GET /todos

router.get("/todos", (req, res) => {
    res.status(200).json({mssg: "GET req to /api/todos"})
})

// POST /todos

router.post("/todos", (req, res) => {
    res.status(201).json({mssg: "POST req to /api/todos"})
})

// DELETE /todos/:id

router.delete("/todos/:id", (req, res) => {
    res.status(200).json({mssg: "DELETE req to /api/todos"})
})

// PUT /todos/:id

router.put("/todos/:id", (req, res) => {
    res.status(200).json({mssg: "PUT req to /api/todos"})
})

export default router