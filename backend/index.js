const express = require('express');

const cors = require('cors');
const port = 5000

const app =  express();

//fill the require data
const userRouter = require("./routers/userRouter")
const userRouter = require("./routers/spaceRouter")
const userRouter = require("./routers/bookingRouter")
const userRouter = require("./routers/contactusRouter")



app.use(express.json());
app.use(cors( {
    //fiil port address you to allow it
    origin: ["http://localhost:3000"]
}));

//that is port to start express server
app.use("/user", userRouter);
app.use("/space",spaceRouter);
app.use("/booking",bookingRouter);
app.use("/booking",contactusRouter);




//start express server
app.listen ( port, () => { 
    console.log('express server started')
});

