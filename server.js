//todo - Declare Variables
const express = require("express");
const app = express();
const PORT = 8500;
const mongoose = require("mongoose");
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')

//*Import functions/routes
const connectDB = require("./config/database")
const homeRoutes = require("./routes/home")
const editRoutes = require("./routes/edit")

require('dotenv').config({path: './config/.env'})

//todo - Connect to Database
connectDB()

//todo - Set Middleware
app.set("view engine", "ejs");
app.use(express.static('public'))

//*Required to properly parse form POST requests - sending data
app.use(express.urlencoded({ extended: true }));

//todo - Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)

//todo - Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));