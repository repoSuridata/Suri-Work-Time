const { Model, DataTypes } = require('sequelize');

class Company extends Model {
    static init(connection){
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
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

module.exports = Company;