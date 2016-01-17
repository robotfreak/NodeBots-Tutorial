var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('robtut2', { title: 'Roboter Tutorial 2' });
});
module.exports = router;
