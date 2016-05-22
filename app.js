var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var cons = require('consolidate');
var jade = require('jade');
var mongoose = require('mongoose');
var assert = require('assert');
var router = express.Router();
var Users = require('./models/usersinfo');
var Twitter = require('twitter');
var cookieParser = require('cookie-parser');
var Tweet = require('./models/morphPost');
var indexPage = require('./routes/index');
var userForm = require('./routes/userRoute');
var userProfile = require('./routes/userProfileRoute');

var client = new Twitter({
    consumer_key: 'ida5V7Vg0a6kydpcbhtEMnUPE',
    consumer_secret: 't2McCeqLpOwCZEciTjXdUX4WxEiKdVFZSkpf10xEFNmtqjpOWf',
    access_token_key: '711935396976988160-eIuO3AfaeHuKM0dP2om1QI9bzUtO8KH',
    access_token_secret: '118r4dc03JpjX7JBDVfs1vzYVZeKAKzbxLtYNkKkS5tLm'
});

var url = 'mongodb://localhost:27017/morph';



mongoose.connect(url, function (err) {

    assert.equal(null, err);
    console.log("Connected to MongoDB successfully");

    var Items = mongoose.model('Items', new mongoose.Schema({}), 'item');

    app.engine('html', cons.jade);
    app.set('view engine', 'jade');
    app.set('views', path.join(__dirname, '/public'));

    app.use(express.static(path.join(__dirname, '/public')));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());

    app.use(errorHandler);
    app.use('/', [userForm, userProfile, router, indexPage]);

    router.route('/tweets/post')
        .post(function (req, res) {
            var tweet = new Tweet(req.query);
            tweet.save(function(err) {
                assert.equal(err, null);
            });
            res.send('OK');
        });

    router.route('/storage/items')
        .get(function (req, res) {
            Items.find({}, function(err, data) {
                res.json(data);
            });
        });

    router.route('/search/tweets')
        .get(function (req, res) {
            console.log(req.query);
            var search = req.query.searchData;
            client.get('search/tweets', {q: search}, function(err, tweets) {
                console.log(tweets);
                res.json(tweets);
            });
        });

    router.route('/stream/tweets')
        .get(function (req, res) {
            console.log(req.query);
            var search = req.query.searchData;
            client.stream('statuses/filter', {track: search}, function (stream) {
                stream.on('data', function(tweet) {
                    console.log(tweet.text);
                    res.json(tweet);
                });

                stream.on('error', function(error) {
                    console.log(error);
                });
            });
        });


    var server = app.listen(8000, function () {
        var port = server.address().port;
        console.log("Server running on port: ", port);
    });

    function errorHandler(err, req, res, next) {
        console.log(err);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    }


});

