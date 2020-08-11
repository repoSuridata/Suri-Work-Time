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
        });
    }   
    static associate(models){
        this.belongsTo(models.erro_detalhe, { foreignKey: 'codigo'});
    }
}



module.exports = Erro;