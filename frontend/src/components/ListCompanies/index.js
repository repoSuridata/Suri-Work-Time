import React, { useState } from "react";

import { Table } from "./styles";

function ListCompanies({ companies, onSubmit }) {
  const [selectedOperator, setSelectedOperator] = useState();
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  function handleSelectedCompany(company) {
    setSelectedCompanies([...selectedCompanies, company]);
  }

  function handleSelectedCompanies(operator, companies, index_company) {
    setSelectedOperator(operator);
    setSelectedCompanies(companies);

    onSubmit({
      id_empresa: companies,
    });
  }
  return (
    <Table cellPadding={0} cellSpacing={0}>
      <div className="tr">
        <div className="th">Operadora</div>
        <div className="th">Empresas</div>
      </div>

      {Object.keys(companies).map((operator, i) => (
        <div className="tr" key={i}>
          <div className="td">
            <input
              type="checkbox"
              onChange={(e) =>
                handleSelectedCompanies(operator, companies[operator])
              }
              checked={selectedOperator === operator ? true : false}
            />
            {operator}
          </div>
          <div className="companies">
            {companies[operator].map((company, j) => (
              <div key={j}>
                <input
                  type="checkbox"
                  onChange={(e) => handleSelectedCompany(company)}
                  checked={selectedCompanies.includes(company) ? true : false}
                />
                {company}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Table>
  );
}

export default ListCompanies;
