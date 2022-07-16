const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// Route
breads.get('/', (req, res) => {
  Bread.find().then((foundBreads) => {
    res.render('index', {
      breads: foundBreads,
      title: 'Index Page',
    });
  });
});


// INDEX
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .then(foundBread => {
          res.render('show', {
              bread: foundBread
          })
      })
})



// CREATE
breads.post('/', (req, res) => {
  if(!req.body.image) {
      req.body.image = undefined 
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})



//New
breads.get('/new', (req, res) => {
  res.render('new')
})
//delete
breads.delete('/:indexArray', (req, res)=>{
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})
// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    })
  } else {
    res.render('404')
  }
})

  

module.exports = breads
