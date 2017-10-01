var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var param = {"value": 'this is sample api'}
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});


/* GET home page. */
router.get('/hello', function(req, res, next) {
  var param = {"result": 'hello'}
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(param);
});


module.exports = router;
