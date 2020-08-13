import styled from "styled-components";

export const Table = styled.div`
  width: 33%;
  margin-top: 2px;
  margin-right: 5px;
  background-color: #e6e6e6;
  .tr {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
  .th {
    font-weight: 600;
  }
  .th,
  .td,
  .companies {
    line-height: 25px;
    padding-left: 5px;
  }
  .td {
    display: flex;
    align-items: center;
  }
  .td,
  .companies {
    border-bottom: 1px solid #abaaaa;
  }
  .th input[type="checkbox"],
  .td input[type="checkbox"] {
    margin-right: 5px;
  }
`;
