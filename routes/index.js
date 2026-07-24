var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/welcome', (req, res) => {
  res.status(200).json({ message: 'Welcome to our app!' });
});

module.exports = router;
