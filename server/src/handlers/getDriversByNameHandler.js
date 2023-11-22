const axios = require("axios");
const getDriversByName = require("../controllers/getDriversByName");

const getDriversByNameHandler = async (req, res) => {
  try {
    const { name } = req.query;

    const driverByName = await getDriversByName(name);
    console.log(!driverByName.length);

    return res.status(200).json(driverByName);
  } catch (error) {
    if (error.message === "Error en la API al buscar drivers por nombre") {
      return res.status(500).json({ error: "Error en la API" });
    } else if (
      error.message === "Error en la base de datos al buscar drivers por nombre"
    ) {
      return res.status(500).json({ error: "Error en la base de datos" });
    } else {
      return res.status(500).json({ error: "Error desconocido" });
    }
  }
};
module.exports = getDriversByNameHandler;
