const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Todo = require('./models/todo');
const app = express();


mongoose.connect('mongodb://localhost:27017/firstDatabase')

app.use(bodyParser.json());

// console.log('Todo is =>',Todo);
// console.log('Mongoose model is : ',mongoose.model('TodoModel'))

app.use('/',express.static(path.join(__dirname, 'assets')))

app.post('/',async (req,res)=>{
    const record = req.body
    console.log(record)

    const response = await Todo.create(record)
    console.log(response);
    res.json({ status : "ok" })

})

app.listen(3000,()=>{
    console.log("server up :)");
})

