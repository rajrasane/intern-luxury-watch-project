require('dotenv').config()
const mongoose = require('mongoose')
const app = require("./app")

const MONGO = process.env.MONGO_URI
const PORT = process.env.PORT 

mongoose.connect(MONGO)
    .then(()=>{
        console.log("Mongo connected")
        app.listen(PORT, ()=> console.log("server running on port ${PORT}"))
    })
    .catch(()=>{
        console.log('mongo connect error', err);
        process.exit(1)
    })