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
    static associate(models){
        this.hasMany(models.time, { foreignKey: 'process_id' });
        this.hasMany(models.time, { foreignKey: 'company_id' });
    }
}

module.exports = Company;