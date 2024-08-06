// index.js

const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
require("dotenv").config();
const router = require("./router");
const App = new Koa();
const port = 8000;
const client = require("./db");
const redisClient = require("./redis");

client
  .connect()
  .then(() => {
    console.log("Connected to the database");

    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    );
  `;

    return client.query(createTableQuery);
  })
  .then(() => {
    App.use(async (ctx, next) => {
      console.log(`Received a request on ${ctx.url} from ${ctx.request.ip}`);
      await next();
    });

    App.use(parser())
      .use(cors())
      .use(router.routes())
      .listen(port, () => {
        console.log(`🚀 Server listening on http://127.0.0.1:${port}/ 🚀`);
      });
  })
  .catch((err) => console.error(err));
