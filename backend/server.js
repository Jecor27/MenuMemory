import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './db.js'
import drinkRoutes from './routes/drinkRoutes.js'
import foodRoutes from './routes/foodRoutes.js'
import userRoutes from './routes/user.js'

const app = express()

//Middleware 

app.use(express.json())
app.use(cors())

//routes
app.use('/api/drinks', drinkRoutes)
app.use('/api/foods', foodRoutes)
app.use('/api/user', userRoutes)

//connecting to DB and port listening 
connectDB(app)