import React, { useEffect, useState } from "react";
import { Container, Content } from "./styles";

import api from "../../services/api";

import Header from "../../components/Header";
import ListCompanies from "../../components/ListCompanies";
import ListProcess from "../../components/ListProcess";
import FormTimer from "../../components/FormTimer";

function Home() {
  const [companies, setCompanies] = useState([]);
  const [process, setProcess] = useState([]);
  const [errors, setErrors] = useState([]);

  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedProcess, setSelectedProcess] = useState();

  // Carregar empresas e operadoras
  useEffect(() => {
    api.get("/empresa").then((response) => {
      setCompanies(response.data);
    });
  }, []);

  // Carregar processos
  useEffect(() => {
    api.get("/processo").then((response) => {
      setProcess(response.data);
    });
  }, []);

  // Carregar erros
  useEffect(() => {
    api.get("/erro").then((response) => {
      setErrors(response.data);
    });
  }, []);

  // Pegar empresas selecionadas
  function handleSelectedCompanies(data) {
    var companiesArray = [];

    // Percorrer obj e gravar no state
    Object.keys(data.id_empresa).map((item) => {
      companiesArray = [...companiesArray, data.id_empresa[item].id];
    });

    setSelectedCompanies(companiesArray);
  }

  // Pegar processo selecionado
  function handleSelectedProcess(data) {
    setSelectedProcess(data.id_processo);
  }

  // Gerar data
  function generateAtualDate() {
    // Obtém a data/hora atual
    var date = new Date();

    // Guarda cada pedaço em uma variável
    var day = date.getDate(); // 1-31
    var mounth = (date.getMonth() + 1).toString(); // 0-11 (zero=janeiro)
    var year4 = date.getFullYear(); // 4 dígitos
    if (mounth.length < 2) mounth = "0" + mounth;
    // Formata a data e a hora (note o mês + 1)
    return year4 + "-" + mounth + "-" + day;
  }

  function handleAddTime(data) {
    var date = generateAtualDate();

    // Pegar total de empresas para dividir o tempo total
    var total_companies = selectedCompanies.length;

    // Validar campos preenchidos
    if (selectedCompanies.length === 0) alert("Selecione ao menos uma empresa");
    if (!selectedProcess) alert("Selecione um processo");
    if (!data.tempo) alert("Tempo inválido");

    // Percorrer empresas selecionadas para gravar no banco
    selectedCompanies.map(async (company) => {
      // Criar obj com dados da empresa
      var savedData = {};
      savedData = {
        id_empresa: company,
        id_usuario: 1,
        codigo: selectedProcess,
        tempo: data.tempo / total_companies,
        data: date,
      };

      // Conectar a API para gravação no BD
      await api.post("/tempo", savedData).then((response) => {
        console.log("Tempo gravado");
      });
    });
  }

  return (
    <Container>
      <Content>
        <Header title="Suri Work Time" />
        <br />
        <hr />
        <br />
        <div className="container">
          <ListCompanies
            companies={companies}
            onSubmit={handleSelectedCompanies}
          />
          <ListProcess process={process} onSubmit={handleSelectedProcess} />
          <FormTimer errors={errors} onSubmit={handleAddTime} />
        </div>
      </Content>
    </Container>
  );
}

export default Home;
