// Import of connection.js
const connection = require('../config/connection.js');

// ORM
const orm = {
  // Displays all burger results
  selectAll: (table, cb) => {
    // Query string
    const query = 'SELECT * FROM ' + table + ';';
    
    connection.query(query, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
  // Updates burger entry
  updateOne: (table, column, value, condition, cb) => {
    // Query string
    const query = 'UPDATE ?? SET ?? = ? WHERE ?';

    connection.query(query, [table, column, value, condition], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  }
}