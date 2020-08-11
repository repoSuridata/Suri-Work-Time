import styled from "styled-components";

export const List = styled.ul`
  width: 33%;
  display: flex;
  flex-direction: column;
  text-align: center;
  .selected {
    background-color: #999;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 2px;
  height: 40px;
  background-color: #d9d9d9;
  cursor: pointer;
  border: none;
  list-style: none;
`;
