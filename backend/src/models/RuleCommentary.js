const { Model, DataTypes } = require('sequelize');

class RuleCommentary extends Model {
    static init(connection){
        super.init({
            company_id: DataTypes.INTEGER,
            date: DataTypes.DATEONLY,
            rule: DataTypes.STRING,
            commentary: DataTypes.STRING
        }, {
            sequelize: connection,
            freezeTableName: true,
            timestamps: false,
            modelName: 'rule_commentary'
        });
    }   
}



module.exports = RuleCommentary;