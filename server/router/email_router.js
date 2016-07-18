const Router = require('express').Router;
const express = require('express');

const urlParser = require('body-parser').urlencoded({extended:true});

const Email = require(__dirname + '/../model/email');



var router = module.exports = exports = express.Router();

router.post('/join', urlParser, (req, res)=>{
    console.log('router posts');

    var newEmail = new Email(req.body);

    console.log(req.body);


    newEmail.save((err, data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg: 'could not save the email.'});
        }
        console.log('x' + data);

    });

    res.status(200).json(req.body);


});
