import express from 'express'


const app = express()
const port = 5000;

app.get("/hello", (req, res) => {
    res.status(200).json({msg: "Hello World! 123"})
})

app.listen(port, () => {
    console.log(`Server is listening on https://localhost:${port}`);
    
})