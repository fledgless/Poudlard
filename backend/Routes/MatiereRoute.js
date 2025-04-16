const express = require("express");
const MatiereController = require("../Controllers/MatiereController");
const router = express.Router();

router.get("/", (request, response) => {
  MatiereController.getAllMatiere(request, response);
});

module.exports = router;