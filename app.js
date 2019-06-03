const express = require("express");
const app = express();

//port
const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`App listening on port ${port} !`);
});
