const axios = require("axios");
const { Op } = require("sequelize");
const { Driver, Team } = require("../db");

const getDriversByName = async (name) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  name = capitalizeFirstLetter(name);
  console.log(name);

  const URL = `http://localhost:5000/drivers?name.forename=${name}`;
  let foundDriversName = [];
  let foundDriversAPI = [];
  let foundDriversDB = [];

  //API local
  try {
    const { data } = await axios(URL);
    console.log(data);
    foundDriversAPI = data.map((driver) => {
      const image =
        "image" in driver
          ? driver.image.url
          : "https://i.pinimg.com/originals/47/39/e3/4739e35380949bf5e22983a8c5adc3f8.jpg";
      return {
        id: driver.id,
        name: driver.name.forename,
        surname: driver.name.surname,
        description: driver.description,
        image: image,
        nationality: driver.nationality,
        dob: driver.dob,
        teams: driver.teams,
      };
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error en la API al buscar drivers por nombre");
  }

  //DB
  try {
    foundDriversDB = await Driver.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
      include: {
        model: Team,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error en la base de datos al buscar drivers por nombre");
  }
  foundDriversName = foundDriversAPI.concat(foundDriversDB);
  return foundDriversName;
};
module.exports = getDriversByName;
