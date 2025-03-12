import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './db.js'
import drinkRoutes from './routes/drinkRoutes.js'

const app = express()

//Middleware 

app.use(express.json())
app.use(cors())

//routes
app.use('/drinks', drinkRoutes)

//connecting to DB and port listening 
connectDB(app)