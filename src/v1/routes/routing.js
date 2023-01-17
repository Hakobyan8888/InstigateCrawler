// In src/v1/routes/index.js
const express = require("express");
const facebookInformationController = require("../../Controllers/facebookInformationController");

const router = express.Router();

router.get("/v1/facebook/", facebookInformationController.apiGetAllUserPosts);
module.exports = router;