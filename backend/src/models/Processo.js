const { Model, DataTypes } = require('sequelize');

class Processo extends Model {
    static init(connection){
        super.init({
            codigo: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            area: DataTypes.STRING,
            descricao: DataTypes.STRING
        }, {
            sequelize: connection,
            freezeTableName: true,
            timestamps: false,
            modelName: 'processo'
        })
    }
}

module.exports = Processo;