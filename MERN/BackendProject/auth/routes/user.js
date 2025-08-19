const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post("/signUp", User  );
// router.post("/login", login  );

module.exports = router;