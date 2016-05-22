var express = require('express');
var Users = require('../models/usersinfo.js');
var router = express.Router();


router.route('/:user')
    .get(function (req, res) {
        Users.findOne({user: req.params.user}, function(err, data) {
            if (err) {
                console.error(err);
            }
            if(req.cookies.user) {
                var reqData = JSON.parse(req.cookies.user);
                if( reqData.email === data.email &&
                    reqData.pass === data.pass) {
                    console.log('OK');
                    return res.render('partials/profile/profile', {email: data.email, user: data.user});
                }
            }
            res.redirect('/');
        });
    });

module.exports = router;
