const RuleCommentary = require('../models/RuleCommentary')
const validacao = require('../helpers/validacao');

module.exports = {
    async create(req, res){
        const {
            company_id,
            date,
            rule,
            commentary 
        } = req.body;
        
        if(!validacao.validarData(data)){
            return res.status(400).json({ error: "Formato da data incorreto. Use AAAA-MM-DD para um formato válido" });
        }

        try{
           await RuleCommentary.create({ company_id, date, rule, commentary });
           return res.json({ "OK": true });
        } catch (err){
            return res.json(err)
        }
    },
    async list(req, res){
        const data = await RuleCommentary.findAll();

        return res.json(data);
    }
}