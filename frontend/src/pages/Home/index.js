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

  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedProcess, setSelectedProcess] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    api.get("/empresa").then((response) => {
      setCompanies(response.data);
    });
  }, []);

  useEffect(() => {
    api.get("/processo").then((response) => {
      setProcess(response.data);
    });
  }, []);

  function handleSelectedCompanies(data) {
    setSelectedCompanies(data);
  }

  function handleSelectedProcess(data) {
    setSelectedProcess(data);
  }

  function handleAddTime(data) {
    setTime(data);
    // const response = await api.post("/tempo", data);
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
          <FormTimer onSubmit={handleAddTime} />
        </div>
      </Content>
    </Container>
  );
}

export default Home;
