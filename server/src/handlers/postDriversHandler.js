const axios = require("axios");
const postDrivers = require("../controllers/postDrivers");

const postDriversHandler = async (req, res) => {
  try {
    const createdDriver = await postDrivers(req, res);
    res.status(201).json({
      message: "Driver creado con éxito",
      data: createdDriver,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el nuevo perro." });
  }
};
module.exports = postDriversHandler;
