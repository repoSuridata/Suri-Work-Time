const Process = require('../models/Process');

module.exports = {
    async create(req, res){
        const { code, name, area, description } = req.body;

        const data = await Process.create({ code, name, area, description });

        return res.json(data);
    },
    async list(req, res){
        const data = await Process.findAll();

        return res.json(data);
    }
}