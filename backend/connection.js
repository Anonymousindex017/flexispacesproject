const mongoose = require('mongoose');

const url="mongodb+srv://ravikashyap181855:1234@cluster0.bxxpk47.mongodb.net/flexispaces?retryWrites=true&w=majority&appName=Cluster0";

//asynchrou\nous fuction promises
mongoose.connect(url)
.then((result) => {
    console.log('connected to the database')
}).catch((err) => {
    console.log(err);
});

//exporting the connection so that other modules
module.exports = mongoose; 