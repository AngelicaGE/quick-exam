/*const express = require("express");

const app = express();
const PORT = 3005;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});

'use strict'
var mongoose = require('mongoose');

var app = require('./app.js');
var PORT = 3900;

mongoose.Promise = global.Promise;
//mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/api_rest', {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => {
        console.log("Conected to MongoDB");
        app.listen(PORT, () => {
            console.log("Server running on port " + PORT);
        });
    });
    */

    var express = require('express')
    var cors = require('cors')
    var app = express()
    const db = require('./app')
    const PORT = 3005;
    
    app.set('port', PORT)
    app.use(cors({origin: 'http://localhost:3001'}));
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    
    const clients = require('./routes/client')
    app.use(clients)


    app.listen(PORT, () => {
        console.log("Server running on port " + PORT);
    });