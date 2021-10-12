const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Todo = require('./models/todo');
const app = express();

app.use(bodyParser.json());

console.log('Todo is =>',Todo);
console.log('Mongoose model is : ',mongoose.model('TodoModel'))

app.use('/',express.static(path.join(__dirname, 'assets')))

app.listen(3000,()=>{
    console.log("server up :)");
})

