/**********************
| TMNT Database       |
| By Steffen Lyngbaek |
| March 3, 2012       |
**********************/

var mysql = require('mysql');
var database = 'tmnt';
var client = mysql.createClient({
  user: 'user',
  password: 'tmnt'
});

client.query('USE ' + database);

client.query('DROP TABLE nodes');

client.query(
  'CREATE TABLE nodes(' +
  'node_num INTEGER, ' +
  'timestamp TIMESTAMP, ' +
  'humidity FLOAT, ' +
  'light0 FLOAT, ' +
  'light1 FLOAT, ' +
  'PRIMARY KEY (node_num, timestamp))'
);

client.query('DROP TABLE pens');

client.query(
  'CREATE TABLE pens(' +
  'node_num INTEGER, ' +
  'pen_num INTEGER, ' +
  'timestamp TIMESTAMP, ' +
  't0 FLOAT, ' +
  't1 FLOAT, ' +
  't2 FLOAT, ' +
  't3 FLOAT, ' +
  'PRIMARY KEY (pen_num, node_num, timestamp), ' +
  'FOREIGN KEY (node_num, timestamp) REFERENCES nodes (node_num, timestamp))'
);

client.end();

// nodes ( node_num, timestamp, humidity, light0, light1 )
//         --------  ---------
// pens ( node_num, pen_num, timestamp, t0, t1, t2, t3, t4 )
//        --------  -------  ---------


// show databases;
// use database
// show tables;
// show columnds from database; // describe database;