var data = require('./data')
  , about = require('./about');


/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Home' });
};

exports.reference = function(req, res){
	res.render('reference', { title: 'TMNT Tortoise Layout Reference'});
};

exports.data = data.data;
exports.n1 = data.n1;
exports.n1t = data.n1t;
exports.about = about.get;