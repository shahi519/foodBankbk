const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipieSchema = new Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, required: true},
    name: { type: String, required: true},
    cuisine: {type: String, required: true},
    meal: {type: Number, required: true}, // 0: All 1: Sauce and Preps 2: Appetizer 3: Main 4: Dessert 
    time: {type: Number},
    steps: [],
    ingreds: [],
    outsideLinks:[],
    videoLinks: [],
    serving: {type: Number, required: false},
    cal: {type: Number, required: false}
},{
    timestamps: true,
});

const Recipie = mongoose.model('Recipie', recipieSchema);

module.exports = Recipie;