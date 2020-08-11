const Erro = require('../models/Erro')
const ErroDetalhe = require('../models/ErroDetalhe')

module.exports = {
    async create(req, res){
        const {
            codigo, 
            nome,
            descricao,
            id_erro,
            id_empresa,
            id_usuario,
            data,
            qtd_erro 
        } = req.body;

        await Erro.create({ codigo, nome, descricao });
        await ErroDetalhe.create({ id_erro, id_empresa, id_usuario, data, qtd_erro });

        return res.json({ "OK": true })
    },
    async list(req, res){
        const data = await Erro.findAll();

        return res.json(data);
    }
}