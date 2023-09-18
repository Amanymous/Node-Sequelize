// const { DataTypes } = require("sequelize");
// const sequelize = require("./index");

// const User = sequelize.define(
//   "User",
//   {
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: "users",
//     createdAt: true,
//     updatedAt: true,
//   }
// );

// module.exports = User;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      createdAt: true,
      updatedAt: true,
    }
  );
  return User;
};
