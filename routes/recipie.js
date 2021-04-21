const router = require('express').Router();
const Recipie = require('../models/recipie.model');

router.route('/').get((req,res,next) => {
    Recipie.find()
    .then(recipies => res.json(recipies))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/meal/:meal').get((req,res,next) => {
    Recipie.find( {meal : req.params.meal})
    .then(recipies => res.json(recipies))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/cuisine/:cuisine').get((req,res,next) => {
    Recipie.find( {cuisine : req.params.cuisine})
    .then(recipies => res.json(recipies))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:search').get((req,res,next) => {
    console.log(req.params.search);
    Recipie.find( {name : { $regex: '.*' + req.params.search + ".*",  $options: "i"}})
    .then(recipies => res.json(recipies))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const cuisine = req.body.cuisine;
    const meal = req.body.meal;// 0: All 1: Sauce and Preps 2: Appetizer 3: Main 4: Dessert 
    const time = req.body.time;
    const steps = req.body.steps;
    const ingreds = req.body.ingreds;
    const outsideLinks = req.body.outsideLinks;
    const videoLinks = req.body.videoLinks;
    const serving = req.body.serving;
    const cal = req.body.cal;

    const newRecipie = new Recipie({
        name,
        cuisine,
        meal,
        time,
        steps,
        ingreds,
        outsideLinks,
        videoLinks,
        serving,
        cal
    });
    
    newRecipie.save()
        .then(() => res.json('Recipie added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/update/:id').post((req,res) => {
    Recipie.findByIdAndUpdate(req.params.id)
        .then(recipie => {
            recipie.name = req.body.name;
            recipie.cuisine = req.body.cuisine;
            recipie.meal = req.body.meal;// 0: All 1: Sauce and Preps 2: Appetizer 3: Main 4: Dessert 
            recipie.time = req.body.time;
            recipie.steps = req.body.steps;
            recipie.ingreds = req.body.ingreds;
            recipie.outsideLinks = req.body.outsideLinks;
            recipie.videoLinks = req.body.videoLinks;
            recipie.serving = req.body.serving;
            recipie.cal = req.body.cal;
            recipie.save()
                .then(() => res.json('Recipie Updated!'))
                .catch(err => res.status(400).json('Error: '+ err));
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((req,res) => {
    Recipie.findById(req.params.id)
        .then(recipie => res.json(recipie))
        .catch(err => res.status(400).json('Error: ' + err))
});


module.exports = router;