const mongoose = require('mongoose');
const Recipie = require('./recipie.model');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    week: {type: Number, required: true},
    year: {type: Number, required: true},
    m1: {type: Recipie.schema},
    m2: {type: Recipie.schema},
    m3: {type: Recipie.schema},
    m4: {type: Recipie.schema},
    t1: {type: Recipie.schema},
    t2: {type: Recipie.schema},
    t3: {type: Recipie.schema},
    t4: {type: Recipie.schema},
    w1: {type: Recipie.schema},
    w2: {type: Recipie.schema},
    w3: {type: Recipie.schema},
    w4: {type: Recipie.schema},
    r1: {type: Recipie.schema},
    r2: {type: Recipie.schema},
    r3: {type: Recipie.schema},
    r4: {type: Recipie.schema},
    f1: {type: Recipie.schema},
    f2: {type: Recipie.schema},
    f3: {type: Recipie.schema},
    f4: {type: Recipie.schema},
    s1: {type: Recipie.schema},
    s2: {type: Recipie.schema},
    s3: {type: Recipie.schema},
    s4: {type: Recipie.schema},
    su1: {type: Recipie.schema},
    su2: {type: Recipie.schema},
    su3: {type: Recipie.schema},
    su4: {type: Recipie.schema},
},{
    timestamps: true,
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;