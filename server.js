const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/app'));



app.use(express.static(__dirname + '/app'));

app.use('/scripts', express.static(__dirname + '/node_modules/jquery/dist'));

app.listen((app.get('port')), ()=>{
    console.log('up on ', app.get('port'));
});
