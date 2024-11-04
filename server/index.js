import express from 'express'
import router from './routes.js'
import 'dotenv/config'
import {connectToMongoDB} from './database.js'
import path from 'path'
import {fileURLToPath} from 'url'

const app = express()
app.use(express.json())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
})

const port = process.env.PORT || 5000;

app.use("/api", router)

async function startServer(){
    await connectToMongoDB()

    app.listen(port, () => {
        console.log(`Server is listening on https://localhost:${port}`);
        
    })
}

startServer()