import express from 'express'
import router from './routes.js'
import 'dotenv/config'
import {connectToMongoDB} from './database.js'

const app = express()
const port = process.env.PORT || 5000;

app.use("/api", router)

async function startServer(){
    await connectToMongoDB()

    app.listen(port, () => {
        console.log(`Server is listening on https://localhost:${port}`);
        
    })
}

startServer()