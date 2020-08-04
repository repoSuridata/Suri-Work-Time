const Tempo = require('../models/Tempo')

module.exports = {
    async create(req, res){
        const { codigo, nome, descricao } = req.body;

        const tempo = await Tempo.create({ codigo, nome, descricao });

        return res.json(tempo);
    }
}