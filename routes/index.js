var express = require('express');
var router = express.Router();

router.all('/*', function(req, res, next) {
  res.render('index', {});
  next();
});


module.exports = router;
