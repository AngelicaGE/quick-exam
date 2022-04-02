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

    const user = require('./routes/user')
    app.use(user)


    app.listen(PORT, () => {
        console.log("Server running on port " + PORT);
    });