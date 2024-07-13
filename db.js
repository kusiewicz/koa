const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  connectionString: `postgresql://adminuser:${process.env.DB_PASSWORD}@terraform-20240713112257563300000001.c7wez4pf1jkr.eu-central-1.rds.amazonaws.com:5432/appDB`,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = client;
