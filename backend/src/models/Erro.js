const { Model, DataTypes } = require('sequelize');

class Erro extends Model {
    static init(connection){
        super.init({
            codigo:{
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING
        }, {
            sequelize: connection,
            freezeTableName: true,
            timestamps: false,
            modelName: 'erro'
        })
    }   
}



module.exports = Erro;