const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
    res.render('addDomain', {title: 'Add Domain'});
});

router.post('/', function (req, res, next) {
    res.render('addDomain', {title: 'Add Domain'});
});

module.exports = router;
