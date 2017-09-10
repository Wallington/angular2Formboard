var express = require('express');
var router = express.Router();
//var reCaptcha = require('recaptcha2');
var request = require('request');


router.get('/auth/:gCaptcha', function(req,res,next)
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
       }
   )
  
});

router.head('/auth/session/create/:profile', function(req,res,next)
{
    console.log('create session');
    //create a session Cookie
    res.cookie('session',true,
    { 
        expires: new Date(Date.now() + 3600000 ) //3600000 = 1 hour if they dont update session  
    });
    //create a profile of the user to access their profile
    res.cookie('user', req.param.profile, { 
        expires: new Date(Date.now() + 3600000 ) //3600000 = 1 hour if they dont update session  
    });

});

router.get('/', function(req, res, next)
{
    res.render('index');
});



module.exports = router;
