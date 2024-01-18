const {Client} = require("pg");
require('dotenv').config();
const client = new Client ({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PSWD,
  port: process.env.DB_PORT,
  SECRET: process.env.SECRET,
  SERVER_URL: process.env.SERVER_URL,
  CLIENT_URL: process.env.CLIENT_URL
});
//client.connect();


module.exports = client;







