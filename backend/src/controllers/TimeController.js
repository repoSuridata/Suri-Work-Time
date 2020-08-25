const Time = require('../models/Time');
const Process = require('../models/Process');
const validacao = require('../helpers/validacao');
const Company = require('../models/Company');

module.exports = {
    async create(req, res){
        const { 
            time,
            date,
            company_id, 
            user_id,
            process_id 
        } = req.body;

        // Validação dos dados enviados
        if(!time){
            return res.status(400).json({ error: "Tempo não pode ser Nulo" });
        }
        if(!validacao.validarData(date)){
            return res.status(400).json({ error: "Formato da data incorreto. Use AAAA-MM-DD para um formato válido" });
        }

        try{
            // Registro dos dados no Banco
            const tempo_dados = await Time.create({ 
                time,
                date,
                company_id, 
                user_id,
                process_id 
            });

            return res.json(tempo_dados);
        } catch (err){
            return res.json(err);
        }
        
    },
    async list(req, res){
        const { company } = req.params;
        const data = await Time.findAll({
            include: [{
                model: Process
            },
            {
                model: Company, 
                where: { nickname: company }
            }]
        });
        
        return res.json(data);
    }
}