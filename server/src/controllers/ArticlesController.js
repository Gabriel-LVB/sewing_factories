const ArticlesServices = require("../services/ArticlesService");

const getAll = require("../functions/controllers/getAll");

module.exports = {
  getAll: (req, res) => getAll(req, res, ArticlesServices),
};
