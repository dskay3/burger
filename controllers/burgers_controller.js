// NPM dependencies
const express = require('express');
const burger = require('../models/burger.js');

// Router for the app
const router = express.Router();

router.get('/', (req, res) => {
  burger.selectAll((data) => {
    // Console logs all burger data
    console.log(data);

    res.render('index', {
      burgers: data
    });
  });
});

router.post('/', (req, res) => {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, 0
  ], () => {
    res.redirect('/');
  });
});

router.put('/:id', (req, res) => {
  var condition = 'id = ' + req.params.id;

  console.log('Condition: ' + condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, () => {
    res.redirect('/');
  });
});

router.delete('/:id', (req, res) => {
  var condition = 'id = ' + req.params.id;

  burger.delete(condition, () => {
    res.redirect('/');
  });
});

module.exports = router;