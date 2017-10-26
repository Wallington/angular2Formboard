var express = require('express');
var router = express.Router();
//var reCaptcha = require('recaptcha2');
var request = require('request');

//connect to the db
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/angluar2ForumBoard', {useMongoClient: true});
mongoose.Promise = global.Promise;
require('../models/forum');
require('../models/thread');
require('../models/post');
// want call a model to which use to get and put data into mongodb aka database
var Forum = mongoose.model('Forum');
var Thread = mongoose.model('Thread');
var Post = mongoose.model('Post');


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
router.get('/auth/session/find/session/', function(req, res, next)
{
    res.json(req.cookies.session);
});

//access database for threads
router.get('/thread/get/:forumBoardName', function(req, res, next)
{
    Forum.findOne({name: req.params.forumBoardName}, function(err, fData)
    {
        if(err)
            console.log(err);
        else
            console.log('found');
        Thread.find({f_id: fData._id},function(err, tData)
        {
            if(err)
                console.log(err)
            
            console.log(tData);
            res.json(tData);
        });
    });
});


router.get('/', function(req, res, next)
{
    res.render('index');
});

//DB zone for testing only
//Creating the forum board
router.head('/db/create/forums/', function(req,res,next)
{
    var forum = new Forum({name: 'Main Board'});
    forum.save(function(err)
    {
        if(err)
        {
           console.log(err);
        } 
        else
        {
            console.log('saved');
        }
    });
    next();
});
//return json data back in console to check if exist
router.head('/db/check/forums/',function(req,res,next)
{
   Forum.find(function(err, data)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(data);
        }
    });
    next();
});
//creating the example threads 
router.head('/db/create/threads/', function(req,res,next)
{
    newThread = new Thread
    (
        {
            name: ' Test 3',
            authorName: 'Admin',
            f_id: '59f12ebc2f87376729694c3f',
            createdDate: 'October 10, 2017',
            recenentPostDate: 'October 10, 2017',
            message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"     
        }
    );
    newThread.save();
    newThread = new Thread
    (
        {
            name: ' Test 1',
            authorName: 'Sean OBrien',
            f_id: '59f12ebc2f87376729694c3f',
            createdDate: 'September 05, 2017',
            recenentPostDate: 'October 10, 2017',
            message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
            
        }
    );
    newThread.save();
    next();
});
//return json data back in console to check if exist
router.head('/db/check/threads/',function(req,res,next)
{
    Thread.find({},function(err, data)
    {
       if(err)
       {
           console.log(err);
       }
       else
       {
           console.log(data);
       }
   });
});


module.exports = router;
