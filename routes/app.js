var express = require('express');
var router = express.Router();



router.get('/auth', function(req,res,next)
{
    res.render('auth');
});

module.exports = router;
