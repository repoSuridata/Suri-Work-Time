const { Model, DataTypes } = require('sequelize');

class Companies extends Model {
    static init(connection){
        super.init({
            d: DataTypes.INTEGER,
            name: DataTypes.STRING
        }, {
            sequelize: connection,
            freezeTableName: true,
            timestamps: false
        })
    }
}

module.exports = Companies;

