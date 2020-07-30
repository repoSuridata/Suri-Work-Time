import React from 'react';

import { List, Button } from './styles';

function ListProcess() {
    function handleProcess(e){
        console.log(e.target.value);
    }
  return <List>
      <Button>Processo 1</Button>
      <Button className="selected">Processo 2</Button>
      <Button>Processo 3</Button>
      <Button>Processo 4</Button>
      <Button>Processo 5</Button>
      <Button>Processo 6</Button>
      <Button>Processo 7</Button>
      <Button>Processo 8</Button>
      <Button>Processo 9</Button>
      <Button>Processo 10</Button>
  </List>;
}

export default ListProcess;