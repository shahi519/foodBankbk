const router = require('express').Router();
const recipie = require('../models/recipie.model');


router.route('/add').post((req,res) => {
    const name = req.body.name;
    const nutrition = req.body.nutrition;
    const level = req.body.level;

    const newAllergy = new Food({
        name,
        nutrition,
        level
    });
    
    newAllergy.save()
        .then(() => res.json('Allergy added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/update/:id').post((req,res) => {
    Food.findByIdAndUpdate(req.params.id)
        .then(food => {
            food.name = req.body.name;
            food.nutrition = req.body.nutrition;
            food.level = req.body.level;
            food.save()
                .then(() => res.json('Food Updated!'))
                .catch(err => res.status(400).json('Error: '+ err));
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').get((req,res) => {
    Food.findById(req.params.id)
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: ' + err))
});


module.exports = router;