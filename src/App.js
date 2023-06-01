import { useState } from 'react';
import Header from './components/Header/Header';
import CreateTodo from './components/CreateTodo/CreateTodo';
import ListTodo from './components/ListTodo/ListTodo';

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className='App'>
      <Header />
      <CreateTodo todo={todo} setTodo={setTodo} />
      <ListTodo todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
