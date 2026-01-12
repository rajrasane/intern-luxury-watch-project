const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const productRoutes = require('./routes/productRoutes')
const errorHandler = require('./middleware/errorHandler')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/api/products', productRoutes);

app.use('/api/auth', authRoutes);

app.use((req, res) => res.status(404).json({ message: 'Not Found' }));

app.use(errorHandler)

module.exports = app;