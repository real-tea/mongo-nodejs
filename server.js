const express = require('express');
const path = require('path');

const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Todo = require('./models/Todo');



mongoose.connect('mongodb://localhost/firstDatabase')

app.use('/',express.static(path.join(__dirname, 'assets')))


app.use(bodyParser.json());

app.post('/api/modify', async (req, res) => {
    
	const { old: oldTitle, new: newTitle } = req.body

	const response = await Todo.updateOne(
		{
			record: oldTitle
		},
		{
			$set: {
				record: newTitle
			}
		}
	)

	console.log(response)

	res.json({ status: 'ok' })
})



//Reading and adding data in FE
app.get('/api/get',async (req,res)=>{
    const Record = await Todo.find({})
    res.json(Record)
})


//Accepting input in the database

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

