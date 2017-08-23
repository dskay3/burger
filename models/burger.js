// Dependencies
const orm = require('../config/orm.js');

const burger = {
  selectAll: (table, cb) => {
    orm.selectAll('burgers', (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  updateOne: (table, column, value, condition, cb) => {
    orm.updateOne('burgers', column, value, condition, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: (table, burger, eaten, cb) => {
    orm.insertOne('burgers', burger, eaten, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  }
};

module.exports = burger;