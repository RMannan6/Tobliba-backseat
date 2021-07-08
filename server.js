import connectDB from './back/config/db.js'
import userRoutes from './back/routes/userRoute.js'
import express from 'express'
import dotenv  from 'dotenv'

connectDB()

dotenv.config()

const app = express()

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))