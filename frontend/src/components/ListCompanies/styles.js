import styled from "styled-components";

export const Table = styled.table`
  width: 33%;
  margin-top: 2px;
  margin-right: 5px;
  background-color: #e6e6e6;
  .operator {
    text-align: center;
  }
  .companies {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    border-left: 0.3px solid #999;
    border-bottom: 0.3px solid #999;
  }
  tr {
    margin: 10px;
  }
  th,
  td {
    text-align: left;
    line-height: 25px;
    margin-left: 15px;
  }
  th input[type="checkbox"],
  td input[type="checkbox"] {
    margin-right: 5px;
  }
`;
