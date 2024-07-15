const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  connectionString: `postgresql://adminuser:${process.env.DB_PASSWORD}@terraform-20240730181737426200000012.cnygkg2oqckm.eu-central-1.rds.amazonaws.com:5432/appDB`,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = client;
