const express = require('express');

const fs = require('fs');

const path = require('path');

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.xpidk.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`;

const mongoose = require('mongoose');

const accessLogScreen = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

const bodyParser = require('body-parser')

const helmet = require('helmet');

const compression = require('compression');

const morgan = require('morgan');

const app = express();

const appRoute = require('./routes/appRoutes');
const { Stream } = require('stream');

app.use(helmet());

app.use(compression());

app.use(morgan('combined', {stream: accessLogScreen}));

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'img')));

app.use(appRoute);

mongoose.connect(MONGODB_URI).then(result => {
    app.listen(process.env.PORT || 3000);
}).catch(err => {
    console.log(err);
});
