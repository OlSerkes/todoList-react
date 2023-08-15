import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme, { Colors } from '../../styles';
import { Box } from './styles';

export default function FilteredButtons({
  buttonsData,
  setIsActiveButton,
  isActiveButton,
  todoFilter,
}) {
  const handleButtonClick = (status, index) => {
    setIsActiveButton(index);
    todoFilter(status);
  };

  return (
    <Box>
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
