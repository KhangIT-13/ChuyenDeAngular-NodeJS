const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PublishSkills', {
    PublishSkillID: {
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
    SkillID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Skills',
        key: 'SkillID'
      }
    }
  }, {
    sequelize,
    tableName: 'PublishSkills',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PublishSkillID" },
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
        name: "SkillID",
        using: "BTREE",
        fields: [
          { name: "SkillID" },
        ]
      },
    ]
  });
};
