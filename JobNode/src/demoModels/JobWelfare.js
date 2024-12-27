const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('JobWelfare', {
    JobWelfareID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PublishID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Publish',
        key: 'PublishID'
      }
    },
    WelfareID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Welfare',
        key: 'WelfareID'
      }
    }
  }, {
    sequelize,
    tableName: 'JobWelfare',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "JobWelfareID" },
        ]
      },
      {
        name: "PublishID",
        using: "BTREE",
        fields: [
          { name: "PublishID" },
        ]
      },
      {
        name: "WelfareID",
        using: "BTREE",
        fields: [
          { name: "WelfareID" },
        ]
      },
    ]
  });
};
