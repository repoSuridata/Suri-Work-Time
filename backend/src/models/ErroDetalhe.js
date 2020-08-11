const { Model, DataTypes } = require('sequelize');

class ErroDetalhe extends Model {
    static init(connection){
        super.init({
            id_erro: DataTypes.INTEGER,
            id_empresa: DataTypes.INTEGER,
            id_usuario: DataTypes.INTEGER,
            data: DataTypes.DATEONLY,
            qtd_erro: DataTypes.INTEGER
        }, {
            sequelize: connection,
            freezeTableName: true,
            timestamps: false,
            modelName: 'erro_detalhe',
        });
    }

    static associate(models){
        this.belongsTo(models.erro, { foreignKey: 'codigo' });
    }
}

module.exports = ErroDetalhe;