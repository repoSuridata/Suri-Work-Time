import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Table = styled.table`
  th {
    text-align: left;
  }
  th,
  td {
    padding: 5px;
  }
  .process {
    display: flex;
  }
  .process div {
    background-color: #999;
    padding: 4px 8px;
    margin: 2px;
  }
  .process .executed,
  .process .executed a {
    background-color: #339033;
    color: #f1f1f1;
    text-decoration: none;
  }
  .process .pending {
    background-color: #d8d837d6;
  }
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99999;
    opacity: 0;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
    width: 100%;
  }
  .modal:target {
    opacity: 1;
    pointer-events: auto;
  }
  .modal > div {
    width: 80%;
    border-radius: 5px;
    position: relative;
    margin: 10% auto;
    padding: 15px 20px;
    background: #f3f3f3;
  }
  .fechar {
    position: absolute;
    width: 25px;
    line-height: 25px;
    right: -8px;
    top: -15px;
    text-align: center;
    margin-top: 5px;
    background: #ff4545;
    border-radius: 50%;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }
  .timer {
    display: flex;
    flex-direction: row;
  }
`;
