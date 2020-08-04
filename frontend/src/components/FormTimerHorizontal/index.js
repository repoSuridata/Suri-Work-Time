import React from "react";
import { FaPlay } from "react-icons/fa";

import {
  Container,
  ContainerError,
  Start,
  Timer,
  Title,
  Textarea,
} from "./styles";

function ListProcess() {
  return (
    <>
      <Container>
        <h3>Competência: 07/2020</h3>
      </Container>
      <br />
      <hr />
      <br />
      <Container>
        <Start>
          <FaPlay />
        </Start>
        <Timer type="time" />
        <br />
        <br />
        <Start>Concluido</Start>
        <Start>Em andamento</Start>
      </Container>
      <br />
      <Container>
        <Title>Erros</Title>
        <ContainerError>
          <select>
            <option>opt 1</option>
            <option>opt 2</option>
            <option>opt 3</option>
          </select>
          <input type="text" placeholder="Observação"></input>
          <input type="text" placeholder="QTD."></input>
        </ContainerError>
      </Container>
      <br />
      <Container>
        <Title>Regras</Title>
        <Textarea></Textarea>
        <Title>Comentários</Title>
        <Textarea></Textarea>
      </Container>
    </>
  );
}

export default ListProcess;
