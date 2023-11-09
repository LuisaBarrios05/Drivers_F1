const axios = require("axios");
const getTeams = require("../controllers/getTeams");

const getTeamsHandler = async (req, res) => {
  try {
    const teamsDB = await getTeams();
    return res.status(200).json(teamsDB);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};
module.exports = getTeamsHandler;
