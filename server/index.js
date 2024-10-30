import express from 'express'
import router from './routes.js'

const app = express()
const port = 5000;

app.use("/api", router)


app.listen(port, () => {
    console.log(`Server is listening on https://localhost:${port}`);
    
})