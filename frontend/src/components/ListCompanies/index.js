import React, { useState } from 'react';

import { Table } from './styles';

function ListCompanies() {
  const [operators, setOperators] = useState([]);
  const [companies, setCompanies] = useState([]);
  return(
      <Table cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
                <th>Operadora</th>
                <th>Empresas</th>
            </tr>
          </thead>
          <tbody>
              <br />
              <tr>
                <td className="operator"><input type="checkbox" />Operadora 1</td>
                <td className="companies">
                    <td><input type="checkbox" />Empresa 1</td>
                    <td><input type="checkbox" />Empresa 2</td>
                    <td><input type="checkbox" />Empresa 3</td>
                </td>
              </tr>
              <br />
              <tr>
                <td className="operator"><input type="checkbox" />Operadora 1</td>
                <td className="companies">
                    <td><input type="checkbox" />Empresa 1</td>
                    <td><input type="checkbox" />Empresa 2</td>
                    <td><input type="checkbox" />Empresa 3</td>
                </td>
              </tr>
              <br />
              <tr>
                <td className="operator"><input type="checkbox" />Operadora 1</td>
                <td className="companies">
                    <td><input type="checkbox" />Empresa 1</td>
                    <td><input type="checkbox" />Empresa 2</td>
                    <td><input type="checkbox" />Empresa 3</td>
                </td>
              </tr>
              <br />
              <tr>
                <td className="operator"><input type="checkbox" />Operadora 1</td>
                <td className="companies">
                    <td><input type="checkbox" />Empresa 1</td>
                    <td><input type="checkbox" />Empresa 2</td>
                    <td><input type="checkbox" />Empresa 3</td>
                </td>
              </tr>
              <br />
              <tr>
                <td className="operator"><input type="checkbox" />Operadora 1</td>
                <td className="companies">
                    <td><input type="checkbox" />Empresa 1</td>
                    <td><input type="checkbox" />Empresa 2</td>
                    <td><input type="checkbox" />Empresa 3</td>
                </td>
              </tr>
              <br />
              <tr>
                <td className="operator"><input type="checkbox" />Operadora 1</td>
                <td className="companies">
                    <td><input type="checkbox" />Empresa 1</td>
                    <td><input type="checkbox" />Empresa 2</td>
                    <td><input type="checkbox" />Empresa 3</td>
                </td>
              </tr>
              <br />
              <tr>
                <td className="operator"><input type="checkbox" />Operadora 1</td>
                <td className="companies">
                    <td><input type="checkbox" />Empresa 1</td>
                    <td><input type="checkbox" />Empresa 2</td>
                    <td><input type="checkbox" />Empresa 3</td>
                </td>
              </tr>
              <br />
              <tr>
                <td className="operator"><input type="checkbox" />Operadora 1</td>
                <td className="companies">
                    <td><input type="checkbox" />Empresa 1</td>
                    <td><input type="checkbox" />Empresa 2</td>
                    <td><input type="checkbox" />Empresa 3</td>
                </td>
              </tr>
          </tbody>
      </Table>
  );
}

export default ListCompanies;