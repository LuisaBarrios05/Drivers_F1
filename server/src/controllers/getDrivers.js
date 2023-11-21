const axios = require("axios");
const { Driver, Team } = require("../db");
const getDrivers = async () => {
  const URL = "http://localhost:5000/drivers";
  let driversAPI = [];
  let driversDB = [];

  //API local
  try {
    const { data } = await axios(URL);
    const results = data;

    for (const driversInfo of results) {
      const driver = {
        id: driversInfo.id,
        name: driversInfo.name.forename,
        surname: driversInfo.name.surname,
        description: driversInfo.description || "No have description.",
        image:
          driversInfo.image.url ||
          "https://i.pinimg.com/originals/47/39/e3/4739e35380949bf5e22983a8c5adc3f8.jpg",
        nationality: driversInfo.nationality,
        dob: driversInfo.dob,
        teams: driversInfo.teams || "No have teams.",
      };
      driversAPI.push(driver);
    }
  } catch (error) {
    console.log(error);
  }

  //DB
  try {
    const driverDb = await Driver.findAll({
      include: [
        {
          model: Team,
          attributes: ["name"],
        },
      ],
    });

    driversDB = driverDb.map((driver) => {
      console.log("Driver from DB:", driver.toJSON());
      const image =
        driver.image ||
        "https://i.pinimg.com/originals/47/39/e3/4739e35380949bf5e22983a8c5adc3f8.jpg";
      return {
        id: driver.id,
        name: driver.name,
        surname: driver.surname,
        description: driver.description || "No have description.",
        image: image,
        nationality: driver.nationality || "No have nationality.",
        dob: driver.dob || "No have birthdate.",
        //teams: driver.Teams,
        // teams: driver.teams ? driver.teams.map((t) => t.name).join(",") : "",
        teams: driver.Teams.map((t) => t.name).join(","),
      };
    });
  } catch (error) {
    throw error;
  }

  const allDrivers = [...driversAPI, ...driversDB];
  return allDrivers;
};
module.exports = getDrivers;
