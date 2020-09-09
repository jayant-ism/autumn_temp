const path = require('path');

const User = require('../models/database');

exports.index = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../','views', 'index.html'));
}

exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../','views', 'contact_us.html'));
}

exports.postContactUs = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const userDetails = new User({
        name: name,
        email: email,
        message: message,
    });
    userDetails.save().then(result => {
        console.log('Created User');
        res.redirect('/');
    }).catch(err => console.log(err));
}

exports.services = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views', 'services.html'));
}
