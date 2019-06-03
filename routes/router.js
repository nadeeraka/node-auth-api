// basic routes

const express = require("express");
const { check, body } = require("express-validator/check");
const router = express.Router();

router.get("/", (res, req, next) => {
  res.send("ok");
});

module.exports = router;
