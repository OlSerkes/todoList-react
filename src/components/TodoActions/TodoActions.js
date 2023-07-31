import { useState, useEffect } from 'react';
import FilteredButtons from '../FilteredButtons/FilteredButtons';
import { Box, Button, ThemeProvider } from '@mui/material';
import theme, { Colors } from '../../styles';

export default function TodoActions({ setTodo, setFiltered, todo }) {
  const buttons = [
    { label: 'All', status: 'all' },
    { label: 'Active', status: true },
    { label: 'Completed', status: false },
  ];

  const [isActiveButton, setIsActiveButton] = useState(0);
  const [buttonsData, setButtonsData] = useState(buttons);
  const [headingText, setHeadingText] = useState('');

  useEffect(() => {
    const activeTodo = todo.filter((item) => !item.checked);
    const completedTodo = todo.filter((item) => item.checked);

    const tasksNoun = activeTodo.length !== 1 ? 'tasks' : 'task';
    setHeadingText(
      activeTodo.length === 0
        ? `All done!`
        : `${activeTodo.length} ${tasksNoun} left todo`
    );

    setButtonsData((prevButtonsData) => [
      { ...prevButtonsData[0], length: todo.length },
      { ...prevButtonsData[1], length: activeTodo.length },
      { ...prevButtonsData[2], length: completedTodo.length },
    ]);
  }, [todo]);

  const todoFilter = (status) => {
    if (status === 'all') {
      setFiltered(todo);
    } else {
      let newTodo = todo.filter((item) => !item.checked === status);
      setFiltered(newTodo);
    }
  };

  const handleClearCompleted = () => {
    const newCompleatedTodo = todo.filter((item) => !item.checked);
    setTodo(newCompleatedTodo);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Box
          component='span'
          m='{1}'
          sx={{ color: Colors.primary, fontWeight: 'bold' }}
        >
          {headingText}
        </Box>
        <FilteredButtons
          buttonsData={buttonsData}
          isActiveButton={isActiveButton}
          setIsActiveButton={setIsActiveButton}
          todoFilter={todoFilter}
        />
        {todo.some((item) => item.checked) && (
          <ThemeProvider theme={theme}>
            <Button
              variant='outlined'
              size='small'
              onClick={handleClearCompleted}
            >
              Clear compleated
            </Button>
          </ThemeProvider>
        )}
      </Box>
    </>
  );
}
