const express = require('express');
const path = require('path');

const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Todo = require('./models/Todo');



mongoose.connect('mongodb://localhost/firstDatabase')


// console.log('Todo is =>',Todo);
// console.log('Mongoose model is : ',mongoose.model('TodoModel'))

app.use('/',express.static(path.join(__dirname, 'assets')))


// app.use(bodyParser.json());

app.post('/api/create',async (req,res,)=>{
    const record = req.body
    console.log(record)

    //response is from mongoDB server

    const response = await Todo.create(record)
    console.log(response);
    res.json({ status : "ok" })

})

app.listen(3000,()=>{
    console.log("server up :)");
})

