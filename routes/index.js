var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: "Welcome to your first Express App" }); //render the index view (in views folder)
});

module.exports = router;
