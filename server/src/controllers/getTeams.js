const axios = require("axios");
const { Team } = require("../db");

const getTeams = async () => {
  const URL = "http://localhost:5000/drivers";
  let allTeams = [];
  try {
    let allTeamsDB = await Team.findAll();

    if (!allTeamsDB.length) {
      const { data } = await axios.get(URL);
      const teamsSet = new Set();

      data.forEach((driverInfo) => {
        const team = driverInfo.teams;
        if (team) {
          let teamArray;
          if (team.includes(", ")) {
            // si hay espacio despues de la coma.
            teamArray = team.split(", ").map((t) => t.trim());
          } else {
            //si no hay espacio despues de la coma. SIGUE SIN FUNCIONAR ESTO.
            teamArray = team.split(",").map((t) => t.trim());
          }

          teamArray.forEach((t) => teamsSet.add(t));
        }
      });

      allTeams = [...teamsSet];
      allTeams = allTeams.map((t) => ({ name: t }));
    }
    Team.bulkCreate(allTeams);
    allTeamsDB = await Team.findAll();
    const teamNames = allTeamsDB.map((team) => team.name);

    return teamNames;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
module.exports = getTeams;
