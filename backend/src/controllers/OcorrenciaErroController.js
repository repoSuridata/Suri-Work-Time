const Erro = require('../models/Erro')
const OcorrenciaErro = require('../models/OcorrenciaErro')
const validacao = require('../helpers/validacao');

module.exports = {
    async create(req, res){
        const {
            id_erro,
            id_empresa,
            id_usuario,
            data,
            qtd_erro 
        } = req.body;

        if(!qtd_erro || qtd_erro < 1){
            return res.status(400).json({ error: "Quantidade de erros inválida. A quantidade de erros deve ser maior que 1" });
        }
        if(!validacao.validarData(data)){
            return res.status(400).json({ error: "Formato da data incorreto. Use AAAA-MM-DD para um formato válido" });
        }

        try{
           await OcorrenciaErro.create({ id_erro, id_empresa, id_usuario, data, qtd_erro });
           return res.json({ "OK": true });
        } catch (err){
            return res.json(err)
        }
    },
    async list(req, res){
        try {
            const data = await OcorrenciaErro.findAll({ include: [{ model: Erro }] });

            return res.json(data);
        } catch (err) {
            console.log(err);
            return res.json(err);
        }
    }
}