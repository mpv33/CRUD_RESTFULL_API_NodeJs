const mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/codeial_development');
//mongoose.connect('mongodb+srv://username:<password>@cluster0.8jpev.mongodb.net/<dbname>?retryWrites=true&w=majority');
mongoose.connect('mongodb+srv://mpv33:uV7Pe6CLrRFw4Eb2@cluster0.8jpev.mongodb.net/codeial_db?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;
