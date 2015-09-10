var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/oauth2', function (req, res, next) {
  console.log('----------------------------------');
  console.log('>>> oauth2');
  console.log('query');
  console.log(req.query);
  console.log('----------------------------------');

  res.status(200).send({success: 'authorized'});
});

module.exports = router;
