import { Box, Button, ButtonGroup } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme, { Colors } from '../../styles';
import { useEffect, useState } from 'react';

export default function FilteredButtons({ filtered, setFiltered, todo }) {
  const buttons = [
    { label: 'All', status: 'all' },
    { label: 'Active', status: true },
    { label: 'Completed', status: false },
  ];

  const [isActiveButton, setIsActiveButton] = useState(0);
  const [buttonsData, setButtonsData] = useState(buttons);

  useEffect(() => {
    const activeButtonLength = todo.filter((item) => !item.checked).length;
    const completedButtonLength = todo.filter((item) => item.checked).length;

    setButtonsData((prevButtonsData) => [
      { ...prevButtonsData[0], length: todo.length },
      { ...prevButtonsData[1], length: activeButtonLength },
      { ...prevButtonsData[2], length: completedButtonLength },
    ]);
  }, [todo]);

  const handleButtonClick = (status, index) => {
    setIsActiveButton(index);
    todoFilter(status);
  };

  const todoFilter = (status) => {
    if (status === 'all') {
      setFiltered(todo);
    } else {
      let newTodo = todo.filter((item) => !item.checked === status);
      setFiltered(newTodo);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <ButtonGroup size='small' aria-label='small button group'>
          {buttonsData.map((button, index) => (
            <Button
              key={button.status}
              variant='outlined'
              sx={{
                backgroundColor:
                  isActiveButton === index ? Colors.primary : Colors.light,
                color: isActiveButton === index ? Colors.white : Colors.primary,
              }}
              onClick={() => handleButtonClick(button.status, index)}
            >
              {button.label} ({button.length})
            </Button>
          ))}
        </ButtonGroup>
      </ThemeProvider>
    </Box>
  );
}
