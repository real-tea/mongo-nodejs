const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();



app.use('/',express.static(path.join(__dirname, 'assets')))

app.listen(3000,()=>{
    console.log("server up :)");
})
