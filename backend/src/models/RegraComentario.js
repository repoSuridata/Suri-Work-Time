const { Model, DataTypes } = require("sequelize");

class RegraComentario extends Model {
  static init(connection) {
    super.init(
      {
        id_empresa: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        data: DataTypes.DATEONLY,
        regra: DataTypes.STRING,
        comentario: DataTypes.STRING,
      },
      {
        sequelize: connection,
        freezeTableName: true,
        timestamps: false,
        modelName: "regra_comentario",
      }
    );
  }
}

module.exports = RegraComentario;
