const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PUBLIC_PORT || 3000;
app.use(express.json());


app.get("/", (req, res) => {
  res.send("This is the first page!!");
});

app.get("/hello", (req, res) => {
  res.send("Hello World!!");
});


if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`);
  });
}

module.exports = app;
