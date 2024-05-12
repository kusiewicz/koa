const Router = require("koa-router");
const router = new Router();

router.get("/", (ctx) => {
  const var1 = process.env.VAR1;
  const var2 = process.env.VAR__2;
  ctx.body = `var1: ${var1} var2: ${var2}!`;
});

module.exports = router;
