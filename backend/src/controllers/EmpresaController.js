const Empresa = require("../models/Empresa");

module.exports = {
  async list(req, res) {
    const empresas = await Empresa.findAll({
      attributes: ["d", "operator", "nickname"],
      order: ["operator", "nickname"],
    });

    data = {};
    empresas.forEach((e) => {
      data[e.dataValues.operator] = [];
    });
    empresas.forEach((e) => {
      data[e.dataValues.operator].push(e.dataValues.nickname);
    });

    return res.json(data);
  },
};
