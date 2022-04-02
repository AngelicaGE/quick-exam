const mongoose = require('mongoose')
const url = 'mongodb://localhost/db_quickExam'

mongoose.connect(url, {})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error trying to connect to MongoDB'))
db.once('open', function callback(){
    console.log("connected to mongodb!")
})

module.exports = db
