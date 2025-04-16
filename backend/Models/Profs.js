const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Config/Sequelize");

class Profs extends Model {}

Profs.init(
  {
    id_profs: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false,
    },
    id_Users: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false,
    //   references: {
    //     model: Users,
    //     key: "id_Users",
    //   },
    },
  },
  {
    sequelize,
    modelName: "Profs",
    tableName: "profs",
    timestamps: false,
  }
);

module.exports = Profs;
