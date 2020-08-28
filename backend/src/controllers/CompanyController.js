const Company = require("../models/Company");

module.exports = {
  async list(req, res) {
    const empresas = await Company.findAll();

    // data = {};

    // empresas.forEach((e) => {
    //   data[e.dataValues.operator] = [];
    // });
    // empresas.forEach((e) => {
    //   data[e.dataValues.operator].push({
    //     "id": e.dataValues.id,
    //     "Empresa": e.dataValues.nickname
    //   });
    // });

    return res.json(empresas);
  },
  async listByOperator(req, res) {
    const empresas = await Company.findAll();

    data = {};

    empresas.forEach((e) => {
      data[e.dataValues.operator] = [];
    });
    empresas.forEach((e) => {
      data[e.dataValues.operator].push({
        "id": e.dataValues.d,
        "Empresa": e.dataValues.nickname
      });
    });

    return res.json(data);
  }
};