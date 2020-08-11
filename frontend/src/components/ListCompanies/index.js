import React, { useState } from "react";

import { Table } from "./styles";

function ListCompanies({ companies }) {
  const [selectedOperator, setSelectedOperator] = useState();
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  function handleSelectedCompany(company) {
    setSelectedCompanies([...selectedCompanies, company]);
  }

  function handleSelectedCompanies(operator, companies) {
    setSelectedOperator(operator);
    setSelectedCompanies(companies);
  }
  return (
    <Table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <th>Operadora</th>
          <th>Empresas</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(companies).map((operator, i) => (
          <tr key={i}>
            <td>
              <input
                type="checkbox"
                onChange={(e) =>
                  handleSelectedCompanies(operator, companies[operator])
                }
                checked={selectedOperator === operator ? true : false}
              />
              {operator}
            </td>
            <td className="companies">
              {companies[operator].map((company, j) => (
                <td key={j}>
                  <input
                    type="checkbox"
                    onChange={(e) => handleSelectedCompany(company)}
                    checked={selectedCompanies.includes(company) ? true : false}
                  />
                  {company}
                </td>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListCompanies;
