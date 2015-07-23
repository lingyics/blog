var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//lingyi added a test router here
router.get('/demo', function(req, res, next) {
    res.send('hello');
});

module.exports = router;


