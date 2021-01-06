const express = require("express");
const rateLimiterRedisMiddleware = require('./rateLimitMiddleware');

const app = express();
app.use(rateLimiterRedisMiddleware);

const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
