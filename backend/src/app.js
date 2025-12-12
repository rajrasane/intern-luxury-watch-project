const express = require('express')
const bodyParser = require('body-parser')
const productRoutes = require('./routes/productRoutes')
const errorHandler = require('./middleware/errorHandler')

const app = express()
app.use(bodyParser.json())

app.use('/api/products', productRoutes);

app.use((req,res) => res.status(404).json({ message: 'Not Found'}));

app.use(errorHandler)

module.exports = app;