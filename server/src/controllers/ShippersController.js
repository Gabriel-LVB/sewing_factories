const ShippersServices = require("../services/ShippersService");
const getAll = require("../functions/controllers/getAll");

module.exports = {
  getAll: async (req, res) => getAll(req, res, ShippersServices),
};
