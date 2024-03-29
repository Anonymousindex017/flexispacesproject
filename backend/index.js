const express = require('express');

const cors = require('cors');
const port = 5000

const app = express();

//fill the require data
const userRouter = require("./routers/userRouter")
const spaceRouter = require("./routers/spaceRouter")
const bookingRouter = require("./routers/bookingRouter")
const contactusRouter = require("./routers/contactusRouter")



app.use(express.json());
app.use(cors({
    //fiil port address you to allow it
    origin: ["http://localhost:3000"]
}));

//that is port to start express server
app.use("/user", userRouter);
app.use("/space", spaceRouter);
app.use("/booking", bookingRouter);
app.use("/contactus", contactusRouter);

//start express server
app.listen(port, () => {
    console.log('express server started')
});

