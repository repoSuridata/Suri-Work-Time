import React from "react";

import { Container, Content } from "./styles";

import Header from "../../components/Header";
import TableExecutedProcess from "../../components/TableExecutedProcess";

function Panel() {
  return (
    <Container>
      <Content>
        <Header title="Painel" />
        <br />
        <hr />
        <br />
        <TableExecutedProcess />
      </Content>
    </Container>
  );
}

export default Panel;
