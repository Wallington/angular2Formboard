var express = require('express');
var router = express.Router();




router.get('/auth/:respond', function(req,res,next)
{
    console.log(req.params);
    
});

router.get('/', function(req, res, next)
{
    res.render('index');
});

module.exports = router;
