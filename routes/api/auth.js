const express = require("express");
const route = express.Router();
const registrationController = require("../../controllers/registrationController");

route.get("/registration", registrationController);

module.exports = route;
