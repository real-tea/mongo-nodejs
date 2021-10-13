const mongoose = require('mongoose');
 
const newModel = new mongoose.Schema({
    record : {type : String,require : true},
    date : {type : Number, require : true, default : Date.now()}
})

const model = mongoose.model('TodoModel',newModel);

module.exports = model;