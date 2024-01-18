const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const passport = require('passport');
const bodyParser = require("body-parser");
const env = require ('dotenv');
const client = require("./config/db.js");
const { CLIENT_URL } = require("./config/db.js");
const authRoutes = require("./src/routes/auth.js");
const authUserRoutes = require("./src/routes/authUserProtected.js");


port = process.env.APP_PORT
//const { authPage } = require("./src/middleware/userAuthentication.js");
require('dotenv').config()
require('./src/middleware/passport-middleware')

client.connect();

/*client.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Database Connected ' + process.env.DB_NAME);
});
return client;*/

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


//initialize middlewares
app.use(express.json())
app.use(cookieParser())
//app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(passport.initialize())
app.use('/api', authRoutes, authUserRoutes)


//Database integration with backend
app.listen(port, () => {
  console.log("Server started on port " + port);
});


