const getAll = require("../functions/services/getAll");
const db = require("../db");

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            const query =
                "SELECT nome, costureiras, gerente, email, telefone, id FROM factories;";
            db.query(query, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result);
            });
        });
    },
};
