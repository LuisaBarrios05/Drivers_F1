const { Router } = require("express");
const getDriversHandler = require("../handlers/getDriversHandler");
const getDriversByIdHandler = require("../handlers/getDriversByIdHandler");
const getDriversByNameHandler = require("../handlers/getDriversByNameHandler");
const postDriversHandler = require("../handlers/postDriversHandler");
const getTeamsHandler = require("../handlers/getTeamsHandler");

const router = Router();

router.post("/drivers", postDriversHandler);
router.get("/drivers", getDriversHandler); //http://localhost:3001/drivers
router.get("/drivers/name", getDriversByNameHandler); //http://localhost:3001/drivers/name?name=lewis
router.get("/drivers/teams", getTeamsHandler); //http://localhost:3001/drivers/teams
router.get("/drivers/:idDriver", getDriversByIdHandler); //http://localhost:3001/drivers/1

module.exports = router;
