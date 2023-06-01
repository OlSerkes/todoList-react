import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function CreateTodo({ todo, setTodo }) {
  const [value, setValue] = useState('');
  const inputHandler = (e) => setValue(e.target.value);

  const addTodo = () => {
    if (value !== '') {
      setTodo([
        ...todo,
        {
          id: uuidv4(),
          title: value,
          checked: false,
        },
      ]);
      setValue('');
    }
  };

  return (
    <section className='form_todo'>
      <div className='form'>
        <label>
          <input
            name='todo'
            id='todo'
            value={value}
            placeholder='What needs to be done?'
            onChange={inputHandler}
          />
        </label>
        <button onClick={addTodo}>Add</button>
      </div>
    </section>
  );
}
