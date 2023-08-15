import React from 'react';
import './index.css';
import styled from 'styled-components';
import { styles } from './styles';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import CreateTodo from './components/CreateTodo/CreateTodo';
import ListTodo from './components/ListTodo/ListTodo';
import Footer from './components/Footer/Footer';
import { Container } from '@mui/material';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex: 1 1 auto;
`;

function App() {
  const [todo, setTodo] = useState(
    !localStorage.getItem('todos-list')
      ? []
      : JSON.parse(localStorage.getItem('todos-list'))
  );

  useEffect(() => {
    localStorage.setItem('todos-list', JSON.stringify(todo));
  }, [todo]);

  return (
    <Container className='App'>
      <Wrapper className='wrapper'>
        <Header />
        <Main className='main'>
          <CreateTodo todo={todo} setTodo={setTodo} />
          <ListTodo todo={todo} setTodo={setTodo} className='main' />
        </Main>
        <Footer />
      </Wrapper>
    </Container>
  );
}

export default App;
