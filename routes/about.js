
/*
 * GET about page.
 */

exports.get = function(req, res){
  res.render('about', { title: 'Express' })
};