import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import CreateTodo from './components/CreateTodo/CreateTodo';
import ListTodo from './components/ListTodo/ListTodo';
import { Container } from '@mui/material';

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
      <Header />
      <CreateTodo todo={todo} setTodo={setTodo} />
      <ListTodo todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
