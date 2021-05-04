const route = require("express").Router();

const studentsRoute = require("./students");

route.use("/students", studentsRoute);

module.exports = route;
