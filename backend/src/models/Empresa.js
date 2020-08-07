const { Model, DataTypes } = require('sequelize');

class Empresa extends Model {
    static init(connection){
        super.init({
            d: DataTypes.INTEGER,
            nickname: DataTypes.STRING,
            operator: DataTypes.STRING
        }, {
            sequelize: connection,
            freezeTableName: true,
            timestamps: false,
            modelName: 'companies'
        })
    }
}

module.exports = Empresa;