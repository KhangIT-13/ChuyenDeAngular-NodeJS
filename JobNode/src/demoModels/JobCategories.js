const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('JobCategories', {
    CategoryID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CategoryName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "CategoryName"
    }
  }, {
    sequelize,
    tableName: 'JobCategories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CategoryID" },
        ]
      },
      {
        name: "CategoryName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CategoryName" },
        ]
      },
    ]
  });
};
