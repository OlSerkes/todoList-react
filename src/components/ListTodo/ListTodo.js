import { useState } from 'react';
import CreateTodo from '../CreateTodo/CreateTodo';

export default function ListTodo({ todo, setTodo }) {
  const [isChecked, setIsChecked] = useState(todo.checked);

  const deleteTodo = (id) => {
    const newTodo = [...todo].filter((item) => item.id !== id);
    return setTodo(newTodo);
  };

  const statusTodo = (id) => {
    const newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    return setTodo(newTodo);
  };

  return (
    <div>
      {todo.length > 0 ? (
        <ul className='todo_list'>
          {todo.map((item) => (
            <li key={item.id}>
              <div className='todo'>
                <input
                  className='status_btn'
                  type='checkbox'
                  name='check'
                  id='check'
                  defaultChecked={todo.checked}
                  onClick={() => statusTodo()}
                />
              </div>
              <label htmlFor='check'>{item.title}</label>
              <button
                className='delete_btn'
                onClick={() => deleteTodo(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className='empty'>
          <p>There is no task</p>
        </div>
      )}
    </div>
  );
}
