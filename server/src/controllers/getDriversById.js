const axios = require("axios");
const { Driver } = require("../db");

const getDriversById = async (id) => {
  const URL = `http://localhost:5000/drivers/${id}`;
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  const idRegex = /^-?\d+$/;

  //API local
  if (idRegex.test(id)) {
    console.log("aca API");
    try {
      if (!id) {
        throw new Error("ID is invalid");
      }

      const { data } = await axios(`${URL}`);

      const driverById = {
        id: data.id,
        name: data.name.forename,
        surname: data.name.surname,
        description: data.description,
        image: data.image.url,
        nationality: data.nationality,
        dob: data.dob,
        teams: data.teams,
      };
      return driverById;
    } catch (error) {
      console.log(error);
    }
  }

  //DB

  try {
    const driverByUuid = await Driver.findOne({ where: { id: id } });

    const teamAsociados = await driverByUuid.getTeams();

    driverByUuid.dataValues.teamAsociados.map((t) => t.name);

    return driverByUuid;
  } catch (error) {
    throw error;
  }
};
module.exports = getDriversById;
