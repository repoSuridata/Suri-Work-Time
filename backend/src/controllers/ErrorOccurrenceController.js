const Error = require('../models/Error')
const ErrorOccurrence = require('../models/ErrorOccurrence')
const validacao = require('../helpers/validacao');

module.exports = {
    async create(req, res){
        const {
            error_id,
            company_id,
            user_id,
            date,
            error_amount 
        } = req.body;

        if(!error_amount || error_amount < 1){
            return res.status(400).json({ error: "Quantidade de erros inválida. A quantidade de erros deve ser maior que 1" });
        }
        if(!validacao.validarData(date)){
            return res.status(400).json({ error: "Formato da data incorreto. Use AAAA-MM-DD para um formato válido" });
        }

        try{
           await ErrorOccurrence.create({ error_id, company_id, user_id, date, error_amount });
           return res.json({ "OK": true });
        } catch (err){
            return res.json(err)
        }
    },
    async list(req, res){
        try {
            const data = await ErrorOccurrence.findAll({ include: [{ model: Error }] });

            return res.json(data);
        } catch (err) {
            console.log(err);
            return res.json(err);
        }
    }
}