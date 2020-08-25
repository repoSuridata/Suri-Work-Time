const { Model, DataTypes } = require('sequelize');

class Time extends Model {
    static init(connection){
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            company_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            process_id: DataTypes.INTEGER,
            time: DataTypes.STRING,
            date: DataTypes.DATEONLY
        }, {
            sequelize: connection,
            freezeTableName: true,
            timestamps: false, 
            modelName: 'time'
        });
    }
    static associate(models){
        this.belongsTo(models.process, { foreignKey: 'process_id' });
        this.belongsTo(models.companies, { foreignKey: 'company_id' });
    }
}

module.exports = Time;