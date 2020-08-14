import React, { useState } from "react";

import { Table } from "./styles";

function ListCompanies({ companies, onSubmit }) {
  const [selectedOperator, setSelectedOperator] = useState();
  const [selectedCompaniesId, setSelectedCompaniesId] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  function handleSelectedCompany(operator, company) {
    console.log(company);
    if (operator !== selectedOperator) {
      setSelectedOperator(operator);
    }

    setSelectedCompanies([...selectedCompanies, company]);
    setSelectedCompaniesId([...selectedCompaniesId, company.id]);

    onSubmit({
      id_empresa: selectedCompanies,
    });
  }

  function handleSelectedCompanies(operator, companies) {
    var companiesArray = [];

    setSelectedOperator(operator);
    Object.keys(companies).map((item) => {
      companiesArray = [...companiesArray, companies[item].id];
    });
    setSelectedCompaniesId(companiesArray);
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
            {companies[operator].map((company) => (
              <div key={company.id}>
                <input
                  type="checkbox"
                  onChange={(e) => handleSelectedCompany(operator, company)}
                  checked={
                    selectedCompaniesId.includes(company.id) ? true : false
                  }
                />
                {company.Empresa}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Table>
  );
}

export default ListCompanies;
