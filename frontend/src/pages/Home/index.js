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

  return (
    <Container>
      <Content>
        <Header title="Suri Work Time" />
        <br />
        <hr />
        <br />
        <div className="container">
          <ListCompanies companies={companies} />
          <ListProcess process={process} />
          <FormTimer />
        </div>
      </Content>
    </Container>
  );
}

export default Home;
