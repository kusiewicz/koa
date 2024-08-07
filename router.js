const Router = require("koa-router");
const router = new Router();
const client = require("./db");

router.get("/", (ctx) => {
  const var1 = process.env.VAR1;
  const var2 = process.env.VAR__2;
  ctx.body = `var1: ${var1} var2: ${var2}!`;
});

router.post("/add/:nickname", async (ctx) => {
  const nickname = ctx.params.nickname;

  const email = `${nickname}@gmail.com`;

  const query = {
    text: "INSERT INTO users(name, email) VALUES($1, $2) RETURNING id",
    values: [nickname, email],
  };
  const { rows } = await client.query(query);

  ctx.status = 201;
  ctx.body = { id: rows[0].id, message: "User added successfully" };
});

router.get("/users", async (ctx) => {
  const { rows } = await client.query("SELECT * FROM users");
  ctx.body = rows;
});

module.exports = router;
