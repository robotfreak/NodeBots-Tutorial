var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('eprimer', { title: 'Einführung in die Elektronik' });
});
module.exports = router;
