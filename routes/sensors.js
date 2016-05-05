var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sensors', { title: 'Roboter Sensoren' });
});
module.exports = router;
