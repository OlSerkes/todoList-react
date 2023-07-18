import { useState } from 'react';
import Header from './components/Header/Header';
import CreateTodo from './components/CreateTodo/CreateTodo';
import ListTodo from './components/ListTodo/ListTodo';
import { Container } from '@mui/material';

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <Container className='App'>
      <Header />
      <CreateTodo todo={todo} setTodo={setTodo} />
      <ListTodo todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
