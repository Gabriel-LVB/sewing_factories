const db = require("../../db");

function getAll(nameOfTable) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM ${nameOfTable}`;
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
}

module.exports = getAll;
