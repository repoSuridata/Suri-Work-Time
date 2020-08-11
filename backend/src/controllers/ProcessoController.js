const Processo = require('../models/Processo');

module.exports = {
    async create(req, res){
        const { codigo, nome, area, descricao } = req.body;

        const data = await Processo.create({ codigo, nome, area, descricao });

        

        return res.json(data);
    },
    async list(req, res){
        const data = await Processo.findAll();

        return res.json(data);
    }
}