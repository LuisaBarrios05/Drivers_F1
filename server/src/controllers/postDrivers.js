const axios = require("axios");
const { Driver, Team } = require("../db");

const postDrivers = async (req, res) => {
  try {
    const { name, surname, description, image, nationality, dob, teams } =
      req.body;

    if (!name || !surname) {
      res.status(400).json({ error: "Faltan datos para crear al driver." });
    }

    //Crear driver en la DB.

    let driverCreated = await Driver.create({
      name: name,
      surname: surname,
      description: description,
      image:
        image ||
        "https://i.pinimg.com/originals/47/39/e3/4739e35380949bf5e22983a8c5adc3f8.jpg",
      nationality: nationality,
      dob: dob || null,
    });

    //buscar teams ingresados en el post.
    for (const teamName of teams) {
      const team = await Team.findOne({
        where: { name: teamName },
      });
      if (team) {
        await driverCreated.addTeam(team);
      }
    }

    //obtener los teams asociados al driver.
    const teamsAsociados = await driverCreated.getTeams();

    driverCreated = {
      name: driverCreated.name,
      surname: driverCreated.surname,
      description: driverCreated.description,
      image: driverCreated.image,
      nationality: driverCreated.nationality,
      dob: driverCreated.dob,
      teams: teamsAsociados.map((team) => team.name),
    };

    return driverCreated;
  } catch (error) {
    console.log(error);
    throw new error("Error al crear el driver en la base de datos.");
  }
};
module.exports = postDrivers;
