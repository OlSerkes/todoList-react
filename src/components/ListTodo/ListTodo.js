import React from 'react';
import { useEffect, useState } from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import {
  TextField,
  IconButton,
  Typography,
  Checkbox,
  List,
  FormControl,
} from '@mui/material';
import { ListItem, TextInput, ButtonsBox, Wrapper, TextBox } from './styles';
import { Colors } from '../../styles';
import TodoActions from '../TodoActions/TodoActions';

export default function ListTodo({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  const [filtered, setFiltered] = useState(todo);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    if (filterStatus === 'all') {
      setFiltered(todo);
    } else if (filterStatus === 'active') {
      const activeTodo = todo.filter((item) => !item.checked);
      setFiltered(activeTodo);
    } else if (filterStatus === 'completed') {
      const completedTodo = todo.filter((item) => item.checked);
      setFiltered(completedTodo);
    }
  }, [todo, filterStatus]);

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

  const renderList = filtered.map((item) => (
    <ListItem key={item.id}>
      {edit === item.id ? (
        <FormControl>
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></TextField>
        </FormControl>
      ) : (
        <TextInput {...item} checked={item.checked}>
          {item.title}
        </TextInput>
      )}
      {edit === item.id ? (
        <IconButton onClick={() => saveTodo(item.id)} size='medium'>
          <SaveIcon fontSize='medium' sx={{ color: Colors.shaft }} />
        </IconButton>
      ) : (
        <>
          <ButtonsBox>
            <Checkbox
              className='status_btn'
              type='checkbox'
              name='check'
              id='check'
              checked={item.checked}
              sx={{
                color: item.checked ? Colors.primary : Colors.shaft,
                '&.Mui-checked': {
                  color: Colors.primary,
                },
              }}
              onClick={() => statusTodo(item.id)}
            />

            <IconButton
              onClick={() => editTodo(item.id, item.title)}
              size='large'
            >
              <EditNoteIcon fontSize='medium' sx={{ color: Colors.shaft }} />
            </IconButton>
            <IconButton onClick={() => deleteTodo(item.id)} size='large'>
              <DeleteIcon fontSize='medium' sx={{ color: Colors.shaft }} />
            </IconButton>
          </ButtonsBox>
        </>
      )}
    </ListItem>
  ));

  return (
    <Wrapper>
      {todo.length > 0 ? (
        <>
          <List className='todo_list' sx={{ px: 0 }}>
            {renderList}
          </List>
          <TodoActions
            setFiltered={setFiltered}
            setFilterStatus={setFilterStatus}
            setTodo={setTodo}
            todo={todo}
          />
        </>
      ) : (
        <TextBox>
          <Typography variant='body2'>There is no task</Typography>
        </TextBox>
      )}
    </Wrapper>
  );
}
