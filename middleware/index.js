const express = require("express");
const open = require("open");

const app = express();
const port = 3000;

function middleware1(req, res, next) {
  console.log(1);
  next();
  console.log(4);
}
function middleware2(req, res, next) {
  console.log(2);
  next();
  console.log(3);
}

app.use(middleware1);
app.use(middleware2);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
// 1,2,3,4
