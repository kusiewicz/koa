const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
require("dotenv").config();
const router = require("./router");
const App = new Koa();
const port = 8000;

// Middleware to log requests
App.use(async (ctx, next) => {
  console.log(`Received a request on ${ctx.url} from ${ctx.request.ip}`);
  await next(); // Pass control to the next middleware function
});

App.use(parser())
  .use(cors())
  .use(router.routes())
  .listen(port, () => {
    console.log(`🚀 Server listening http://127.0.0.1:${port}/ 🚀`);
  });
