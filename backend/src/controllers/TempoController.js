const Tempo = require('../models/Tempo')

module.exports = {
    async create(req, res){
        const { tempo, data } = req.body;

        const tempo_dados = await Tempo.create({ tempo, data });

        return res.json(tempo_dados);
    }
}