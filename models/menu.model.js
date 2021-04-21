const mongoose = require('mongoose');
const recipie = require('./recipie.model');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    m1: {type: recipie},
    m2: {type: recipie},
    m3: {type: recipie},
    m4: {type: recipie},
    t1: {type: recipie},
    t2: {type: recipie},
    t3: {type: recipie},
    t4: {type: recipie},
    w1: {type: recipie},
    w2: {type: recipie},
    w3: {type: recipie},
    w4: {type: recipie},
    r1: {type: recipie},
    r2: {type: recipie},
    r3: {type: recipie},
    r4: {type: recipie},
    f1: {type: recipie},
    f2: {type: recipie},
    f3: {type: recipie},
    f4: {type: recipie},
    s1: {type: recipie},
    s2: {type: recipie},
    s3: {type: recipie},
    s4: {type: recipie},
    su1: {type: recipie},
    su2: {type: recipie},
    su3: {type: recipie},
    su4: {type: recipie},
},{
    timestamps: true,
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;