const { Model, DataTypes } = require('sequelize');

class ErrorOccurrence extends Model {
    static init(connection){
        super.init({
            error_id: DataTypes.INTEGER,
            company_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            date: DataTypes.DATEONLY,
            error_amount: DataTypes.INTEGER
        }, {
            sequelize: connection,
            freezeTableName: true,
            timestamps: false,
            modelName: 'error_occurrence',
        });
    }

    static associate(models){
        this.belongsTo(models.error, { foreignKey: 'error_id' });
    }
}

module.exports = ErrorOccurrence;