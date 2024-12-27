const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = sequelize.define('Users', {
    UserID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "UserName"
    },
    PasswordHash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "Email"
    },
    FullName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Sex: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    DateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Marital: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    Country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AttachedFile: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Role: {
      type: DataTypes.ENUM('Candidate','Employer','Admin'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
      {
        name: "UserName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserName" },
        ]
      },
      {
        name: "Email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Email" },
        ]
      },
    ]
  });
module.exports = User;
