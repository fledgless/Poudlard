const {  } = require("sequelize");
const Matiere = require("../Models/Matiere");

class MatiereService {
  async getAllMatiere() {
    return await Matiere.findAll();
  }
}

module.exports = new MatiereService();
