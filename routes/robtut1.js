var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('robtut1', { title: 'Roboter Tutorial 1' });
});
module.exports = router;
