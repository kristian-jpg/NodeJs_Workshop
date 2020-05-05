const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
    /* TO DO
        Create the login form in twig
     */
    res.render('login', {title: 'Login'});
});

router.post('/', function (req, res, next) {
    if (!req.body.username || !req.body.password)
        res.status(401).json({message: 'Parameters are missing'})
    else {
        try {
            let username = req.body.username;
            let password = req.body.password;
            let encryptedPassword = MD5(password);
            try {
                con.checkTableExists("user", function (result) {
                    if (result == 0) {
                        con.createTable({
                            tableName: "user", args: [
                                {col: "id", typeVar: "INT AUTO_INCREMENT PRIMARY KEY"},
                                {col: "username", typeVar: "VARCHAR(255)"},
                                {col: "email", typeVar: "VARCHAR(255)"},
                                {col: "name", typeVar: "VARCHAR(255)"},
                                {col: "password", typeVar: "VARCHAR(255)"}
                            ]
                        })
                    }
                })
                con.checkRecordExists({
                    table: "user",
                    args: [{col: "username", value: username}, {col: "password", value: encryptedPassword}]
                }, (result) => {
                    console.log("me", result);
                    if (!result) {
                        error = "Incorrect Username or Password";
                    } else {
                        //error = "User already Exists";
                    }
                })

            } catch (e) {
                console.log(e);
            }
        } catch (error) {
            res.status(401).json({message: 'Something went wrong', error: error});
        }
    }
    /*
        TO DO
--------1. Verify the user exists in the database;
--------2. Check the password matches (The password must be encrypted)
        3. Save the user in the session.
     */
    res.render('login', {title: 'Login'});
});

module.exports = router;
