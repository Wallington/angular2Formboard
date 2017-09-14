var express = require('express');
var router = express.Router();
//var reCaptcha = require('recaptcha2');
var request = require('request');


router.get('/auth/valdate/:gCaptcha', function(req,res,next)
{
    //url set the values and codes for the valdating
    var url = 'https://www.google.com/recaptcha/api/siteverify?secret=6LcNriwUAAAAANscAG0T05pInNp6Q3PMh1QLtnoe&response=' + req.params.gCaptcha;  
    //requseting to valdate the google response then send back as JSON to caller
    request
   (
       {
            method: 'POST',
            url: url
       }
       ,function(error, response, body)
       {
           if(error)
            {
                console.log(['request-error', error.toString()]);
            }

            res.json(body);
            res.end();
       }
   )
   
});
//create the session cookies
router.head('/auth/session/create/:email/:name/:birthdate/:avatar/:rank', function( req, res, next)
{
    var object = 
    {
        email : req.params.email,
        name : req.params.name,
        birthdate: req.params.birthdate,
        avatar: req.params.avatar,
        rank: req.params.rank
    } 
    res.cookie('user', object , {expires: new Date(Date.now() + 3600000)});
    res.cookie('session',true, {expires: new Date(Date.now() + 3600000)});
    next();
});

//accessing the profile in the user cookie
router.get('/auth/session/find/user/', function(req, res, next)
{
    res.json(req.cookies.user);
});

//accessing the session in the session cookie
router.get('/auth/session/find/session', function(err,req, res, next)
{
    
});

router.get('/', function(req, res, next)
{
    res.render('index');
});



module.exports = router;
