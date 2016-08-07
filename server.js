const express = require('express');
const mongoose = require('mongoose');
const app = express();

// app.set('port', (process.env.PORT || 5000));
app.set('port', (80));


const emailRouter = require(__dirname + '/server/router/email_router');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ftf_db');

app.use('/api', emailRouter);
app.use(express.static(__dirname + '/app'));


app.use('/scripts', express.static(__dirname + '/node_modules/jquery/dist'));


module.exports = exports = function(mongooseConnect, cb){
    mongoose.connect(mongooseConnect);
};

app.listen((app.get('port')), ()=>{
    console.log('up on ', app.get('port'));
});
