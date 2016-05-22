var express = require('express');
var Users = require('../models/usersinfo.js');
var router = express.Router();

router.route('/user')
    .get(function(req, res) {
        if (!Object.keys(req.query).length) {
            return res.redirect('/'); //if req from other resource?
        }
        console.log(req.query);
        Users.findOne({email: req.query.email, pass: req.query.pass}, function(err, user) {
            if (err) {
                console.error(err);
            }
            res.json(user);
        });
    })
    .post(function(req, res) {
        var user = new Users(req.query);
        user.save(function (err) {
            res.send(err);
        });
    });

module.exports = router;

