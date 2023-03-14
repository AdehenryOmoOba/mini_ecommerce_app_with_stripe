require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())

function connectDB(){
  if(mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise()
  }
  return  mongoose.connect(process.env.DB_URL)
}

async function startServer(){
  try {
    console.log(`Connecting to database...`)
    await connectDB()
    console.log(`Connected to database ✅`)
    app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}...`))
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {startServer, app}