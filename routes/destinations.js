var express = require('express');
var router = express.Router();

/* GET destination page. */
router.get('/', function(req, res, next) {
  res.render('destination', { title: 'Destinations' });
});

module.exports = router;
