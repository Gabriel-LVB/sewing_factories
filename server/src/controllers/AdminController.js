const AdminService = require("../services/AdminService");
const getAll = require("../functions/controllers/getAll");

module.exports = {
  getInfos: (req, res) => getAll(req, res, AdminService),
  putInfos: async (req, res) => {
    const json = { error: "", result: "" };
    const infos = await AdminService.putInfos(req.body);

    if (infos) {
      json.result = infos;
    }
    res.send(json).end();
  },
};
