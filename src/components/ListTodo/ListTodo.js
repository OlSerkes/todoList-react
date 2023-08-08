import { useEffect, useState } from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import {
  Box,
  TextField,
  IconButton,
  Typography,
  List,
  ListItem,
  Checkbox,
  FormControl,
} from '@mui/material';
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
    <ListItem
      key={item.id}
      sx={{
        background: Colors.white,
        borderRadius: '6px',
        m: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 'auto',
      }}
    >
      {edit === item.id ? (
        <FormControl>
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></TextField>
        </FormControl>
      ) : (
        <Typography
          sx={{
            flexGrow: 1,
            wordBreak: 'break-all',
            hyphens: 'auto',
            textAlign: 'justify',
            textDecoration: item.checked ? 'line-through' : 'none',
          }}
          component='div'
        >
          {item.title}
        </Typography>
      )}
      {edit === item.id ? (
        <IconButton onClick={() => saveTodo(item.id)} size='medium'>
          <SaveIcon fontSize='medium' sx={{ color: Colors.shaft }} />
        </IconButton>
      ) : (
        <>
          <Box sx={{ display: 'flex' }}>
            <Checkbox
              className='status_btn'
              type='checkbox'
              name='check'
              id='check'
              checked={item.checked}
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
          </Box>
        </>
      )}
    </ListItem>
  ));

  return (
    <Box
      sx={{
        background: Colors.light,
        borderRadius: '11px',
        width: { sm: 400, md: 550 },
        my: 0,
        mx: 'auto',
      }}
    >
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
        <Box
          className='empty'
          sx={{
            textAlign: 'center',
            p: 1,
          }}
        >
          <Typography variant='body2'>There is no task</Typography>
        </Box>
      )}
    </Box>
  );
}
