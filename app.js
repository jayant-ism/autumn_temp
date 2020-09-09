const express = require('express');

const path = require('path');

const MONGODB_URI = 'mongodb+srv://Jayant:abcd1234@cluster0.xpidk.mongodb.net/test';

const mongoose = require('mongoose');

const bodyParser = require('body-parser')

const app = express();

const appRoute = require('./routes/appRoutes');

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'img')));

app.use(appRoute);

mongoose.connect(MONGODB_URI).then(result => {
    app.listen(3000);
}).catch(err => {
    console.log(err);
});