const express = require("express");
const router = express.Router();
const { handleUserSignup, handleUserLogin } = require("../controllers/user")


router.post('/', handleUserSignup, handleUserLogin);

module.exports = router;