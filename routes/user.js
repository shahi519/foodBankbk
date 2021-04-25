const router = require('express').Router();
const User = require('../models/user.model');


router.route('/add').post((req,res) => {
    const name  = req.body.name;
    const password  = req.body.password;
    const newUser = new User({
        name,
        password
    });
    
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;