const RegraComentario = require('../models/RegraComentario')
const validacao = require('../helpers/validacao');

module.exports = {
    async create(req, res){
        const {
            id_empresa,
            regra,
            data,
            comentario 
        } = req.body;
        
        if(!validacao.validarData(data)){
            return res.status(400).json({ error: "Formato da data incorreto. Use AAAA-MM-DD para um formato válido" });
        }

        try{
           await RegraComentario.create({ id_empresa, regra, data, comentario });
           return res.json({ "OK": true });
        } catch (err){
            return res.json(err)
        }
    },
    async list(req, res){
        const data = await RegraComentario.findAll();

        return res.json(data);
    }
}