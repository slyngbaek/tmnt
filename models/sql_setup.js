var mysql = require('mysql');

// Set up the mysql databse
var client = mysql.createClient({
  user: 'web_client',
  password: 'tmnt'
});

var DATABASE = 'tmnt';
client.query('USE ' + DATABASE);
exports.exec = client;