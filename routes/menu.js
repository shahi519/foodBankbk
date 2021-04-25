const router = require('express').Router();
const Menu = require('../models/menu.model');

router.route('/').get((req,res,next) => {
    Menu.find().sort({createdAt : -1})
    .then(Menus => res.json(Menus))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req,res) => {
    const owner = ObjectId("6084d2e4629c470e342dc82a");
    const week = req.body.week;
    const year = req.body.year;
    const m1 = req.body.m1;
    const m2 = req.body.m2;
    const m3 = req.body.m3;
    const m4 = req.body.m4;
    const t1 = req.body.t1;
    const t2 = req.body.t2;
    const t3 = req.body.t3;
    const t4 = req.body.t4;
    const w1 = req.body.w1;
    const w2 = req.body.w2;
    const w3 = req.body.w3;
    const w4 = req.body.w4;
    const r1 = req.body.r1;
    const r2 = req.body.r2;
    const r3 = req.body.r3;
    const r4 = req.body.r4;
    const f1 = req.body.f1;
    const f2 = req.body.f2;
    const f3 = req.body.f3;
    const f4 = req.body.f4;
    const s1 = req.body.s1;
    const s2 = req.body.s2;
    const s3 = req.body.s3;
    const s4 = req.body.s4;
    const su1 = req.body.su1;
    const su2 = req.body.su2;
    const su3 = req.body.su3;
    const su4 = req.body.su4;

    const newMenu = new Menu({
        owner,
        week,
        year,
        m1,
        m2,
        m3,
        m4,
        t1,
        t2,
        t3,
        t4,
        w1,
        w2,
        w3,
        w4,
        r1,
        r2,
        r3,
        r4,
        f1,
        f2,
        f3,
        f4,
        s1,
        s2,
        s3,
        s4,
        su1,
        su2,
        su3,
        su4,
    });
    
    newMenu.save()
        .then(() => res.json('Menu added!'))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/update/:id').post((req,res) => {
    Menu.findByIdAndUpdate(req.params.id)
        .then(Menu => {
            Menu.week = req.body.week;
            Menu.year = req.body.year;
            Menu.m1 = req.body.m1;
            Menu.m2 = req.body.m2;
            Menu.m3 = req.body.m3;
            Menu.m4 = req.body.m4;
            Menu.t1 = req.body.t1;
            Menu.t2 = req.body.t2;
            Menu.t3 = req.body.t3;
            Menu.t4 = req.body.t4;
            Menu.w1 = req.body.w1;
            Menu.w2 = req.body.w2;
            Menu.w3 = req.body.w3;
            Menu.w4 = req.body.w4;
            Menu.r1 = req.body.r1;
            Menu.r2 = req.body.r2;
            Menu.r3 = req.body.r3;
            Menu.r4 = req.body.r4;
            Menu.f1 = req.body.f1;
            Menu.f2 = req.body.f2;
            Menu.f3 = req.body.f3;
            Menu.f4 = req.body.f4;
            Menu.s1 = req.body.s1;
            Menu.s2 = req.body.s2;
            Menu.s3 = req.body.s3;
            Menu.s4 = req.body.s4;
            Menu.su1 = req.body.su1;
            Menu.su2 = req.body.su2;
            Menu.su3 = req.body.su3;
            Menu.su4 = req.body.su4;
            Menu.save()
                .then(() => res.json('Menu Updated!'))
                .catch(err => res.status(400).json('Error: '+ err));
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:year/:week').get((req,res) => {
    Menu.find({ week: req.params.week, year: req.params.year})
        .then(Menu => res.json(Menu))
        .catch(err => res.status(400).json('Error: ' + err))
});

// const Recipie = require('../models/recipie.model');
// router.route('/test').get((req,res) => {
//     Recipie.findOne()
//         .then(recipie => {
//             const week = 17;
//             const year = 2020;
//             const m1 = recipie;
//             const newMenu = new Menu({
//                 week,
//                 year,
//                 m1
//             });
//             newMenu.save()
//             .then(() => res.json('Test menu added!'))
//         })
//         .catch(err => res.status(400).json('Error: ' + err))
// });

module.exports = router;