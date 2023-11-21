const axios = require("axios");
const { Driver } = require("../db");

const getDriversById = async (id) => {
  const URL = `http://localhost:5000/drivers/${id}`;
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  const idRegex = /^-?\d+$/;

  //API local
  if (idRegex.test(id)) {
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
  console.log("inicio de db");
  try {
    const driverByUuid = await Driver.findOne({ where: { id: id } });

    const teamAsociados = await driverByUuid.getTeams();

    const driversByIdDB = {
      id: driverByUuid.id,
      name: driverByUuid.name,
      surname: driverByUuid.surname,
      description: driverByUuid.description,
      image: driverByUuid.image,
      nationality: driverByUuid.nationality,
      dob: driverByUuid.dob,
      teams: teamAsociados.map((t) => t.name).join(", "),
    };

    return driversByIdDB;
  } catch (error) {
    console.log(error);
  }
};
module.exports = getDriversById;
