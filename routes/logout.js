var express = require('express');
var router = express.Router();

router.get('/logout', function(req, res, next) {
    if (req.session) {
        req.user.destroy(function(err) {
            if(error) {
                return next(error);
            } else {
                return res.redirect('/');
            }
        });
    }
    return res.render('index', { title: 'Index', title : "Home" });
});