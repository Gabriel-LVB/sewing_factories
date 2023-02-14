const express = require("express");
const router = express.Router();

const ArticlesController = require("./controllers/ArticlesController");

const AdminController = require("./controllers/AdminController");

const ShippersController = require("./controllers/ShippersController");

const FactoriesController = require("./controllers/FactoriesController");

const ShipsController = require("./controllers/ShipsController");

router.get("/articles", ArticlesController.getAll);
router.get("/admin/infos", AdminController.getInfos);
router.put("/admin/infos", AdminController.putInfos);
router.get("/shippers", ShippersController.getAll);
router.get("/factories", FactoriesController.getAll);
router.get("/ships", ShipsController.getAll);

module.exports = router;
