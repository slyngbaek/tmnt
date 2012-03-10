var client = require('../models/sql_setup');

/*
 * POST to sensor data from MySQL DB.
 */

exports.data = function (req, res){
	// console.log(req.body.node);
	// console.log(req.body.temp);

	var node_num = req.body.node;
	if (req.body.temp === 'true') {
		client.exec.query(
			//DATE_FORMAT(timestamp, \'%Y-%m-%d %k:%i\')
			'SELECT pen_num, DATE_FORMAT(timestamp, \'%b-%d-%Y %l:%i %p\') AS timestamp, t0, t1, t2, t3 ' +
			'FROM pens ' +
			'WHERE node_num = ' + node_num + ' AND timestamp >= CURDATE()-1 ' +
			'ORDER BY pen_num, timestamp',
			function(err, results, fields){
			
			if (err) {
				throw err;
			}

			// Test Ouput
			// console.log(results);
			// console.log(fields);

			res.send(results);
		});
	}
	else {
		client.exec.query(
			//DATE_FORMAT(timestamp, \'%Y-%m-%d %k:%i\')
			'SELECT DATE_FORMAT(timestamp, \'%b-%d-%Y %l:%i %p\') AS timestamp, humidity, light0, light1 ' +
			'FROM nodes ' +
			'WHERE node_num = ' + node_num + ' AND timestamp >= CURDATE()-1 ' +
			'ORDER BY timestamp',
			function(err, results, fields){
			
			if (err) {
				throw err;
			}

			// Test Ouput
			// console.log(results);
			// console.log(fields);

			res.send(results);
		});
	}
};