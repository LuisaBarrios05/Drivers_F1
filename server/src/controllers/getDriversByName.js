const axios = require("axios");
const { Op } = require("sequelize");
const { Driver, Team } = require("../db");
const db = require("../../api/db.json");

const getDriversByName = async (name) => {
  const capitalizeFirstLetter = (string) => {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  name = capitalizeFirstLetter(name);

  const URL = `http://localhost:5000/drivers?name.forename=${name}`;
  let foundDriversName = [];
  let foundDriversAPI = [];
  let foundDriversDB = [];

  //API local
  try {
    const { data } = await axios(URL);

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
    console.log(db);
    if (!foundDriversAPI.length) {
      foundDriversAPI = db.drivers
        .filter((driver) => {
          const forename = driver.name.forename;
          const isMatch = forename.startsWith(name);

          // Depuración: Imprimir información
          console.log(
            `Comparando ${forename} con ${name}. Coincide: ${isMatch}`
          );

          return isMatch;
        })
        .map((driver) => {
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
    }
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

    foundDriversDB = foundDriversDB.map((driver) => {
      const image =
        driver.image ||
        "https://i.pinimg.com/originals/47/39/e3/4739e35380949bf5e22983a8c5adc3f8.jpg";
      return {
        id: driver.id,
        name: driver.name,
        surname: driver.surname,
        description: driver.description,
        image: image,
        nationality: driver.nationality,
        dob: driver.dob,
        teams: driver.Teams.map((t) => t.name).join(","),
      };
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error en la base de datos al buscar drivers por nombre");
  }
  foundDriversName = foundDriversAPI.concat(foundDriversDB);
  return foundDriversName;
};
module.exports = getDriversByName;
