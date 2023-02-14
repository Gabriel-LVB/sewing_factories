const getAll = require("../functions/services/getAll");
const db = require("../db");

module.exports = {
  getAll: () => getAll("admin"),
  putInfos: (body) => {
    return new Promise((resolve, reject) => {
      const data = JSON.parse(Object.keys(body)[0]);
      db.query(
        "UPDATE admin SET name=?, email=?, phone=?;",
        [data.name, data.email, data.phone],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(results);
        }
      );
    });
  },
};
