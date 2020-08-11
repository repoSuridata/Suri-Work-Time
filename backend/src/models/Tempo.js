const { Model, DataTypes } = require('sequelize');

class Tempo extends Model {
    static init(connection){
        super.init({
            codigo: DataTypes.INTEGER,
            id_empresa: DataTypes.INTEGER,
            id_usuario: DataTypes.INTEGER,
            id_processo: DataTypes.INTEGER,
            tempo: DataTypes.STRING,
            data: DataTypes.DATEONLY
        }, {
            sequelize: connection,
            freezeTableName: true,
            timestamps: false, 
            modelName: 'tempo'
        });
    }
    static associate(models){
        this.belongsTo(models.processo, { foreignKey: 'codigo' });
    }
}

module.exports = Tempo;