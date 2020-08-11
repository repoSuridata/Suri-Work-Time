const Tempo = require('../models/Tempo');
const Processo = require('../models/Processo');
const validacao = require('../helpers/validacao');

module.exports = {
    async create(req, res){
        const { 
            tempo,
            data,
            codigo, 
            id_empresa, 
            id_usuario,
            id_processo 
        } = req.body;

        // Validação dos dados enviados
        if(!codigo){
            return res.status(400).json({ error: "Código não pode ser Nulo" });
        }
        if(!tempo){
            return res.status(400).json({ error: "Tempo não pode ser Nulo" });
        }
        if(codigo < 1 || codigo > 12){
            return res.status(400).json({ error: "Informe um código de processo válido. Os códigos válidos estão entre 1 e 12" });
        }
        if(!validacao.validarData(data)){
            return res.status(400).json({ error: "Formato da data incorreto. Use AAAA-MM-DD para um formato válido" });
        }

        try{
            // Registro dos dados no Banco
            const tempo_dados = await Tempo.create({ 
                tempo,
                data,
                codigo, 
                id_empresa, 
                id_usuario,
                id_processo 
            });
        } catch (err){
            return res.json(err);
        }
        
        return res.json(tempo_dados);
    },
    async list(req, res){
        const data = await Tempo.findAll({ include: [{ model: Processo }] });
        
        return res.json(data);
    }
}