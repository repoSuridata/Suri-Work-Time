const Processo = require('../models/Processo')

module.exports = {
    async create(req, res){
        const { codigo, nome, area, descricao } = req.body;

        const processo = await Processo.create({ codigo, nome, area, descricao });

        return res.json(processo);
    }
}