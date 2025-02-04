const express = require("express");
const router = express.Router();
const serieController = require("../controllers/serieController");

router.get("/series", serieController.getAllSeries);
router.post("/series", serieController.addSerie);
router.put("/series/:id", serieController.updateSerie);
router.delete("/series/:id", serieController.deleteSerie);
router.get("/series/top10", serieController.getTop10Series);
router.get("/series/:id", serieController.getSerieById);

module.exports = router;
