import React, { useState } from "react";

import { List, Button } from "./styles";

function ListProcess({ process, onSubmit }) {
  const [selectedProcess, setSelectedProcess] = useState(0);
  function handleProcess(e) {
    setSelectedProcess(e.target.value);

    onSubmit({
      id_processo: e.target.value,
    });
  }
  return (
    <List>
      <h3>Processos</h3>
      {process.map((item) => (
        <Button
          onClick={(e) => handleProcess(e)}
          key={item.codigo}
          className={
            parseInt(selectedProcess) === parseInt(item.codigo)
              ? "selected"
              : ""
          }
          value={item.codigo}
        >
          {item.nome}
        </Button>
      ))}
    </List>
  );
}

export default ListProcess;
