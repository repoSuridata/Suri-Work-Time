const Erro = require('../models/Erro')
const ErroDetalhe = require('../models/ErroDetalhe')
const validacao = require('../helpers/validacao');

module.exports = {
    async create(req, res){
        const {
            nome,
            descricao,
            id_empresa,
            id_usuario,
            data,
            qtd_erro 
        } = req.body;

        if(!qtd_erro || qtd_erro < 1){
            return res.status(400).json({ error: "Quantidade de erros inválida. A quantidade de erros deve ser maior que 1" });
        }
        if(!nome){
            return res.status(400).json({ error: "Campo nome é obrigatório" });
        }
        if(!validacao.validarData(data)){
            return res.status(400).json({ error: "Formato da data incorreto. Use AAAA-MM-DD para um formato válido" });
        }

        try{
            await Erro.create({ nome, descricao });
            await ErroDetalhe.create({ id_empresa, id_usuario, data, qtd_erro });
        } catch (err){
            return res.json(err)
        }

        return res.json({ "OK": true })
    },
    async list(req, res){
        try {
            const data = await ErroDetalhe.findAll({ include: [{ model: Erro }] });

            return res.json(data);
        } catch (err) {
            console.log(err);
        }
    }
}