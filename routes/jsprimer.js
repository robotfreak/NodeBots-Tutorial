var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jsprimer', { title: 'Einführung in JavaScript' });
});
module.exports = router;
