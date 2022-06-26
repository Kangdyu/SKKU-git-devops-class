var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '안드로메다 폰' });
});

router.get('/pricing', function(req, res, next) {
  res.render('pricing', { title: '안드로메다 폰 가격' });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', {title: '안드로메다 폰 구매', name: req.query.name, price: req.query.price});
});

module.exports = router;
