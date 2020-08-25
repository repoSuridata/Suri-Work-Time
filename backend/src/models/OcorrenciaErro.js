const { Model, DataTypes } = require("sequelize");

class OcorrenciaErro extends Model {
  static init(connection) {
    super.init(
      {
        codigo: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        id_erro: DataTypes.INTEGER,
        id_empresa: DataTypes.INTEGER,
        id_usuario: DataTypes.INTEGER,
        data: DataTypes.DATEONLY,
        qtd_erro: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
        freezeTableName: true,
        timestamps: false,
        modelName: "ocorrencia_erro",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.erro, { foreignKey: "id_erro" });
  }
}

module.exports = OcorrenciaErro;
