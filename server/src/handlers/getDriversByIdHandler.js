const axios = require("axios");
const getDriversById = require("../controllers/getDriversById");

const getDriversByIdHandler = async (req, res) => {
  try {
    const { idDriver } = req.params;
    const driverID = await getDriversById(idDriver);
    return res.status(200).json(driverID);
  } catch (error) {
    return error.message.includes("ID")
      ? res.status(404).send(error.message)
      : res.status(500).send(error.message);
  }
};
module.exports = getDriversByIdHandler;
