import { useState } from 'react';

export default function ListTodo({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');

  const deleteTodo = (id) => {
    const newTodo = [...todo].filter((item) => item.id !== id);
    return setTodo(newTodo);
  };

  const statusTodo = (id) => {
    const newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    return setTodo(newTodo);
  };

  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };

  const saveTodo = (id) => {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  };

  const renderList = todo.map((item) => (
    <li key={item.id}>
      <div className='todo'>
        {edit === item.id ? (
          <div>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></input>
          </div>
        ) : (
          <label htmlFor='check'>{item.title}</label>
        )}
        {edit === item.id ? (
          <button onClick={() => saveTodo(item.id)}>Save</button>
        ) : (
          <>
            <div>
              <input
                className='status_btn'
                type='checkbox'
                name='check'
                id='check'
                defaultChecked={item.checked}
                onClick={() => statusTodo(item.id)}
              />
            </div>
            <div>
              <button
                className='edit_btn'
                onClick={() => editTodo(item.id, item.title)}
              >
                Edit todo
              </button>
              <button
                className='delete_btn'
                onClick={() => deleteTodo(item.id)}
              >
                Delete todo
              </button>
            </div>
          </>
        )}
      </div>
    </li>
  ));

  return (
    <div>
      {todo.length > 0 ? (
        <ul className='todo_list'>{renderList}</ul>
      ) : (
        <div className='empty'>
          <p>There is no task</p>
        </div>
      )}
    </div>
  );
}
