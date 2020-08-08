import React, { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

import {
  Container,
  ContainerError,
  Start,
  Timer,
  Title,
  Textarea,
} from "./styles";

function ListProcess() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <Container>
      <h3>Timer</h3>
      <Start onClick={toggle}>{isActive ? <FaPause /> : <FaPlay />}</Start>
      <Timer type="text" onChange={() => {}} value={seconds} />
      <br />
      <br />
      <Start>Concluido</Start>
      <Start>Em andamento</Start>
      <br />
      <br />
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
      <br />
      <br />
      <Title>Regras +</Title>
      <Textarea></Textarea>
      <Title>Comentários +</Title>
      <Textarea></Textarea>
    </Container>
  );
}

export default ListProcess;
