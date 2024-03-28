const express = require('express');

const cors = require('cors');
const port = 5000

const app =  express();

//fill the require data
const userRouter = require("./models/usermodel")

app.use(express.json());
app.use(cors( {
    //fiil port address you to allow it
    origin: ["http://localhost:3000"]
}));

//that is port to start express server
app.use("/user", userRouter);


//start express server



app.listen ( port, () => { 
    console.log('express server started')
});

