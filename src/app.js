import express from 'express';
import routes from "./routes/index.js"
import loaders from './loaders/index.js';
import authMiddleware from './middlewares/authMiddleware.js';
import cookieParser from 'cookie-parser';
import cors from "cors"

const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/", routes)
loaders.start()

app.get('/', authMiddleware ,(req, res) => {
    res.json({message: "olá mundo"})
})

export default app;