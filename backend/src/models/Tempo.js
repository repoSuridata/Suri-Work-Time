const { Model, DataTypes } = require('sequelize');

class Tempo extends Model {
    static init(connection){
        super.init({
            codigo: DataTypes.INTEGER,
            tempo: DataTypes.STRING,
            data: DataTypes.DATEONLY
        }, {
            sequelize: connection,
            freezeTableName: true,
            timestamps: false
        })
    }
}

module.exports = Tempo;