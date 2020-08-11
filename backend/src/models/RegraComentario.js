const { Model, DataTypes } = require('sequelize');

class RegraComentario extends Model {
    static init(connection){
        super.init({
            id_empresa: DataTypes.INTEGER,
            data: DataTypes.DATEONLY,
            regra: DataTypes.STRING,
            comentario: DataTypes.STRING
        }, {
            sequelize: connection,
            freezeTableName: true,
            timestamps: false,
            modelName: 'regra_comentario'
        });
    }   
}



module.exports = RegraComentario;