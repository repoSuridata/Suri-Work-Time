import styled from "styled-components";

export const Table = styled.table`
width: 33%;
margin-top: 2px;
margin-right: 5px;
background-color: #e6e6e6;
.operator{
    text-align: center; 
}
.companies{
    display:flex;
    flex-direction: column;    
    justify-content: center;
    align-items: center;
    border-left: 1px solid #999;
}
tr{
    margin: 10px;
}
th, td{
    text-align: center;
    line-height: 25px;
}
th input[type=checkbox], td input[type=checkbox]{
    margin-right: 5px;
}
`;