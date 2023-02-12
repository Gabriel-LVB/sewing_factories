const AdminService = require("../services/AdminService");
const getAll = require("../functions/controllers/getAll");

module.exports = {
  getInfos: (req, res) => getAll(req, res, AdminService),
};
