import React from 'react';
import { Container, Content } from './styles';

import Header from '../../components/Header';
import ListCompanies from '../../components/ListCompanies';
import ListProcess from '../../components/ListProcess';
import FormTimer from '../../components/FormTimer';

function Home() {
  return (
    <Container>
        <Content>
            <Header title="Suri Work Time" />
            <br />
            <hr />
            <br />
            <div className="container">
                <ListCompanies />
                <ListProcess />
                <FormTimer />
            </div>
        </Content>
    </Container>
  );
}

export default Home;