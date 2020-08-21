const { Model, DataTypes } = require('sequelize');

class Process extends Model {
    static init(connection){
        super.init({
            code: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            name: DataTypes.STRING,
            area: DataTypes.STRING,
            description: DataTypes.STRING
        }, {
            sequelize: connection,
            freezeTableName: true,
            timestamps: false,
            modelName: 'process'
        })
    }
    static associate(models){
        this.hasMany(models.time, { foreignKey: 'process_id' });
    }
}

module.exports = Process;