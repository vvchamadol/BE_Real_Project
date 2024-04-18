const express = require("express");
const { readdirSync } = require("fs");
const morgan = require("morgan");
const cors = require("cors");
const bodyParse = require("body-parser");
const connectDb = require("./config/db");


const registerRouters = require('./Routes/register')
const loginRouters = require('./Routes/login')
const profileRouters = require('./Routes/register')
const packageRouters = require('./Routes/package')
const packageinfoRouters = require('./Routes/package')
//const packageupdateRouters = require('./Routes/package')
const waxRouters = require('./Routes/wax')
const waxinfoRouters = require('./Routes/wax')
const bookingRouters = require('./Routes/book')
const walkinRouters = require('./Routes/walkIn')
const recordRouters = require('./Routes/record')


const app = express();
const port = 8000;
connectDb();


app.use(morgan("dev"));
app.use(cors());
app.use(bodyParse.json({ limit: "10mb" }));

app.use('/register', registerRouters)
app.use('/login', loginRouters)
app.use('/profile', profileRouters)
app.use('/package', packageRouters)
app.use('/packageinfo', packageinfoRouters)
//app.use('/packageupdate', packageupdateRouters)
app.use('/wax', waxRouters)
app.use('/waxinfo', waxinfoRouters)
app.use('/booking', bookingRouters)
app.use('/walkin', walkinRouters)
app.use('/record', recordRouters)





//app.get("/pr", (req, res) => {
  //res.send("Hello");
//});




app.listen(port, () => {
  console.log(`Server is Running port ${port}`);
});