const { Model, DataTypes } = require("sequelize");

class Processo extends Model {
  static init(connection) {
    super.init(
      {
        codigo: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: DataTypes.STRING,
        area: DataTypes.STRING,
        descricao: DataTypes.STRING,
      },
      {
        sequelize: connection,
        freezeTableName: true,
        timestamps: false,
        modelName: "processo",
      }
    );
  }
  static associate(models) {
    this.hasMany(models.tempo, { foreignKey: "codigo" });
  }
}

module.exports = Processo;
