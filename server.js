//DEPENDENCIES
const express = require('express');
const breads = require('./controllers/breads_controller.js');

require('dotenv').config();
const PORT = process.env.PORT
const app = express()
console.log(PORT)

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//ROUTES
//Landing Page
app.get('/', (req, res)=>{
  res.send('Welcome to an Awesome App about Breads!')
})
//Breads- Index page
const breadsController = require ('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// Show
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    })
  } else {
    res.render('error404')
  }
})


//404 Page
app.get('*', (req, res)=> {
  res.render('error404')
})



//LISTEN
app.listen (PORT, ()=>{
  console.log ("we are at port", PORT);
})