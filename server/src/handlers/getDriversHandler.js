const axios = require("axios");
const getDrivers = require("../controllers/getDrivers");

const getDriversHandler = async (req, res) => {
  try {
    const driversInfo = await getDrivers();
    res.json(driversInfo);
  } catch (error) {
    console.error("Error al obtener los drivers:", error);
    res.status(500).json({ error: "No se pudieron obtener los drivers." });
  }
};
module.exports = getDriversHandler;
