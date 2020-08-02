import React from "react";

import { Container, Table } from "./styles";
import FormTimerHorizontal from "../FormTimerHorizontal";

function TableExecutedProcess() {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Empresas</th>
            <th>Processos (Atividades)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Empresa1</td>
            <td className="process">
              <div className="executed">
                <a href={`#abrirModal`}>Processo 1</a>
              </div>
              <div className="executed">Processo 2</div>
              <div className="executed">Processo 3</div>
              <div className="executed">Processo 4</div>
              <div className="executed">Processo 5</div>
            </td>
          </tr>
          <tr>
            <td>Empresa2</td>
            <td className="process">
              <div className="executed">Processo 1</div>
              <div className="executed">Processo 2</div>
              <div className="pending">Processo 3</div>
              <div>Processo 4</div>
              <div>Processo 5</div>
            </td>
          </tr>
          <tr>
            <td>Empresa3</td>
            <td className="process">
              <div className="executed">Processo 1</div>
              <div className="executed">Processo 2</div>
              <div className="executed">Processo 3</div>
              <div className="pending">Processo 4</div>
              <div>Processo 5</div>
            </td>
          </tr>
          <tr>
            <td>Empresa4</td>
            <td className="process">
              <div className="executed">Processo 1</div>
              <div className="executed">Processo 2</div>
              <div className="executed">Processo 3</div>
              <div>Processo 4</div>
              <div>Processo 5</div>
            </td>
          </tr>
          <tr>
            <td>Empresa5</td>
            <td className="process">
              <div className="executed">Processo 1</div>
              <div className="executed">Processo 2</div>
              <div className="executed">Processo 3</div>
              <div>Processo 4</div>
              <div>Processo 5</div>
            </td>
          </tr>
        </tbody>
        <div id={`abrirModal`} className="modal">
          <div>
            <a href="#fechar" title="Fechar" className="fechar">
              x
            </a>
            <div className="container">
              <FormTimerHorizontal />
            </div>
          </div>
        </div>
      </Table>
    </Container>
  );
}

export default TableExecutedProcess;
