const { Model, DataTypes } = require('sequelize');

class Error extends Model {
    static init(connection){
        super.init({
            code:{
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            name: DataTypes.STRING,
            description: DataTypes.STRING
        }, {
            sequelize: connection,
            freezeTableName: true,
            timestamps: false,
            modelName: 'error'
        });
    }   
    static associate(models){
        this.hasMany(models.error_occurrence, { foreignKey: 'error_id' });
    }
}

module.exports = Error;