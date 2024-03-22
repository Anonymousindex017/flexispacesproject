const express = require('express');

const cors = require('cors');

const app =  express();

//fill the require data
const (RouterFileName) = require(`./routes`);


app.use(cors( {
    //fiil port address you to allow it
    origin: '*'
}));

//that is port to start express server

const port = 5500

//start express server

app.get('/',(req,res) => {
    res.send('response from expresss');
});

//demo to check it

