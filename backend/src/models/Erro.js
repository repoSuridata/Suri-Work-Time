const { Model, DataTypes } = require("sequelize");

class Erro extends Model {
  static init(connection) {
    super.init(
      {
        codigo: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
      },
      {
        sequelize: connection,
        freezeTableName: true,
        timestamps: false,
        modelName: "erro",
      }
    );
  }
  static associate(models) {
    this.hasMany(models.ocorrencia_erro, { foreignKey: "id_erro" });
  }
}

module.exports = Erro;
