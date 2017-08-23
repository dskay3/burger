// NPM dependencies
const express = require('express');
const burger = require('../models/burger.js');

// Router for the app
const router = express.Router();

router.get('/', (request, result) => {
  burger.selectAll('burgers', (data) => {
    result.render('index', {
      burgers: data
    });
  });
});

router.post('/', (request, result) => {
  const burgerName = {
    burgerName: req.body.burgerName
  };
  const eaten = {
    eaten: request.body.eaten
  }

  burger.insertOne('burger', burgerName, eaten, (data) => {
    result.redirect('/');
  });
});

router.put('/:id', (request, result) => {
  const eaten = {
    devoured: Boolean(request.body.devoured)
  };
  const condition = {
    id: request.params.id
  }

  burger.updateOne('burgers', 'devoured', eaten, condition, (data) => {
    result.redirect('/');
  });
});

module.exports = router;