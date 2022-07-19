//DEPENDENCIES
const express = require('express')

require('dotenv').config();
const PORT = process.env.PORT
const app = express()
console.log(PORT)

//ROUTES
//Landing Page
app.get('/', (req, res)=>{
  res.send('Welcome to an Awesome App about Breads!')
})
//Breads- Index page
const breadsController = require ('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//LISTEN
app.listen (PORT, ()=>{
  console.log ("we are at port", PORT);
})