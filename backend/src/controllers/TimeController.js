const Time = require("../models/Time");
const Process = require("../models/Process");
const validacao = require("../helpers/validacao");
const Company = require("../models/Company");

const Op = require("sequelize").Op;

module.exports = {
  async create(req, res) {
    let { time, date, company_id, user_id, process_id } = req.body;

    // Validação dos dados enviados
    if (!time) {
      return res.status(400).json({ error: "Tempo não pode ser Nulo" });
    }
    if (!validacao.validarData(date)) {
      return res.status(400).json({
        error:
          "Formato da competencia incorreto. Use AAAA-MM para um formato válido",
      });
    }

    date += "-01";

    try {
      // Registro dos dados no Banco
      const tempo_dados = await Time.create({
        time,
        date,
        company_id,
        user_id,
        process_id,
      });

      return res.json(tempo_dados);
    } catch (err) {
      return res.json(err);
    }
  },
  async list(req, res) {
    const { company_id, process_id, competence } = req.query;

    if (
      competence.split("-").length != 2 ||
      competence.split("-")[0].length != 4 ||
      competence.split("-")[1].length != 2
    ) {
      return res
        .status(404)
        .json({ error: "A competência deve estar no formato AAAA-MM" });
    }

    console.log(competence);
    const data = await Time.findAll({
      where: {
        date: {
          [Op.like]: `%${competence}%`,
        },
      },
      include: [
        {
          model: Process,
          where: { code: process_id },
        },
        {
          model: Company,
          where: { d: company_id },
        },
      ],
    });

    // Verificando se obj está vazio
    if (Object.keys(data).length === 0) {
      return res
        .status(404)
        .json({ error: "Empresa não encontrada ou não há dados disponíveis" });
    }

    return res.json(data);
  },

  async listAll(req, res) {
    const data = await Time.findAll({
      include: [
        {
          model: Process,
        },
      ],
    });

    return res.json(data);
  },
};
