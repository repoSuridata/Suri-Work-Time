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

function ListProcess({ errors, onSubmit }) {
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

  async function handleSubmit() {
    setIsActive(false);
    await onSubmit({
      tempo: seconds,
    });
  }

  return (
    <Container>
      <h3>Timer</h3>
      <Start onClick={toggle}>{isActive ? <FaPause /> : <FaPlay />}</Start>
      <Timer type="text" onChange={() => {}} value={seconds} />
      <br />
      <br />
      <Start onClick={handleSubmit}>Concluido</Start>
      <Start onClick={handleSubmit}>Em andamento</Start>
      <br />
      <br />
      <Title>Erros</Title>
      <ContainerError>
        <select>
          {errors.map((error) => (
            <option key={error.codigo} value={error.codigo}>
              {error.nome}
            </option>
          ))}
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
