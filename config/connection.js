// NPM packages
const mysql = require('mysql');
const chalk = require('chalk');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kihyun123',
    database: 'burgers_db'
  });
};

// Connection using ES6
connection.connect((err) => {
  if (err) {
    console.log(chalk.red("Error connecting: " + err.stack));
    return;
  } else {
    console.log(chalk.green("Connected as " + connection.threadId));
  }
});

// Export connection
module.exports = connection;