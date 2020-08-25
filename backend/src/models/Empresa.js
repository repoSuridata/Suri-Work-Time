const { Model, DataTypes } = require("sequelize");

class Empresa extends Model {
  static init(connection) {
    super.init(
      {
        d: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nickname: DataTypes.STRING,
        operator: DataTypes.STRING,
      },
      {
        sequelize: connection,
        freezeTableName: true,
        timestamps: false,
        modelName: "companies",
      }
    );
  }
}

module.exports = Empresa;
