var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('iotut', { title: 'Ein-Ausgabe Tutorial' });
});
module.exports = router;
