const FactoriesServices = require("../services/FactoriesService");
const getAll = require("../functions/controllers/getAll");

module.exports = {
  getAll: (req, res) => getAll(req, res, FactoriesServices),
};
