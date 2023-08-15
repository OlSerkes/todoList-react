import React from 'react';
import { useState, useEffect } from 'react';
import FilteredButtons from '../FilteredButtons/FilteredButtons';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Span } from './styles';
import theme from '../../styles';

export default function TodoActions({
  setTodo,
  setFiltered,
  setFilterStatus,
  todo,
}) {
  const buttons = [
    { label: 'All', status: 'all' },
    { label: 'Active', status: true },
    { label: 'Completed', status: false },
  ];

  const boxTheme = useTheme();
  const isDesctop = useMediaQuery(boxTheme.breakpoints.up('md'));
  const [isActiveButton, setIsActiveButton] = useState(0);
  const [buttonsData, setButtonsData] = useState(buttons);
  const [headingText, setHeadingText] = useState('');

  let boxStyle = isDesctop
    ? {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }
    : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px 0',
      };

  useEffect(() => {
    const activeTodo = [...todo].filter((item) => !item.checked);
    const completedTodo = [...todo].filter((item) => item.checked);

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
      setFilterStatus(status);
    } else {
      setFilterStatus(status ? 'active' : 'completed');
    }
  };

  const handleClearCompleted = () => {
    const newCompleatedTodo = todo.filter((item) => !item.checked);
    setTodo(newCompleatedTodo);
  };

  return (
    <>
      <Box sx={boxStyle}>
        <Span>{headingText}</Span>
        <FilteredButtons
          buttonsData={buttonsData}
          isActiveButton={isActiveButton}
          setIsActiveButton={setIsActiveButton}
          todoFilter={todoFilter}
        />
        <ThemeProvider theme={theme}>
          {todo.some((item) => item.checked) && (
            <Button
              variant='outlined'
              size='small'
              onClick={handleClearCompleted}
            >
              Clear compleated
            </Button>
          )}
        </ThemeProvider>
      </Box>
    </>
  );
}
