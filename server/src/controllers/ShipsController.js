const ShipsServices = require("../services/ShipsService");
const getAll = require("../functions/controllers/getAll");

module.exports = {
  getAll: (req, res) => getAll(req, res, ShipsServices),
};
