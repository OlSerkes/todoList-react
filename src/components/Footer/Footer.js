import React from 'react';
import { Colors } from '../../styles';
import { Typography, Link } from './styles';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  const theme = useTheme();
  const isDesctop = useMediaQuery(theme.breakpoints.up('md'));

  let boxStyle = isDesctop
    ? {
        bgcolor: Colors.light,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '80px',
      }
    : {
        bgcolor: Colors.light,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
      };

  return (
    <Box sx={boxStyle}>
      <Typography>Coded by Oleksandra Serkes</Typography>
      <Typography>made with React</Typography>
      <Link
        href='https://github.com/OlSerkes/todoList-react'
        underline='hover'
        rel='noopener'
        target='_blank'
      >
        {'app code on '}
        <GitHubIcon
          fontSize='medium'
          sx={{ color: Colors.shaft, verticalAlign: 'middle' }}
        />
      </Link>
    </Box>
  );
}
