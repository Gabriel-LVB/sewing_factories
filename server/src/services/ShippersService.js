const getAll = require("../functions/services/getAll");

module.exports = {
  getAll: () => getAll("shippers"),
};
