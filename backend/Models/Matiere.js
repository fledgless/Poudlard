const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");
const Profs = require("./Profs");

class Matiere extends Model {}

Matiere.init(
  {
    id_matiere: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    descriptif: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_profs: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: Profs,
        key: "id_profs",
      },
    },
  },
  {
    sequelize,
    modelName: "Matiere",
    tableName: "matiere",
    timestamps: false,
  }
);

module.exports = Matiere;
