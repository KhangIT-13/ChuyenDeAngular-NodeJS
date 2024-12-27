const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Welfare = sequelize.define(
    "Welfare",
    {
      WelfareID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      WelfareName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Welfare",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "WelfareID" }],
        },
      ],
    }
  );
module.exports = Welfare; 
