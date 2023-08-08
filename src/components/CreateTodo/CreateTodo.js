import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  FormControl,
  TextField,
  IconButton,
  Box,
  InputAdornment,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Colors } from '../../styles';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <Box className='form_todo' sx={{ textAlign: 'center' }}>
      <FormControl
        className='form'
        sx={{
          display: 'inline-block',
          textAlign: 'center',
        }}
        margin='normal'
        onSubmit={handleSubmit}
        component='form'
      >
        <TextField
          name='todo'
          id='todo'
          value={value}
          placeholder='Please, enter what needs to be done'
          size='small'
          margin='dense'
          onChange={inputHandler}
          sx={{
            width: { sm: 400, md: 550 },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton type='submit' size='large'>
                  <AddIcon fontSize='large' sx={{ color: Colors.shaft }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </Box>
  );
}
