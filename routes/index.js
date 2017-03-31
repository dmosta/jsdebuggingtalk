var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  debugger;
  
  res.render('index', { title: 'Express' });
});

router.get('/abort', function(req, res, next) {
  console.error("SOMETHING WENT WRONG!");
  process.exit(1);
});

router.get('/minecraft', function(req, res, next){
  res.sendFile(path.join(__dirname, '../public/minecraft.html'));
});

module.exports = router;
