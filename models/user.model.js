const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required:true},
    password: { type: String, required: true}
},{
    timestamps: true,
});

const Note = mongoose.model('User', userSchema);

module.exports = Note;