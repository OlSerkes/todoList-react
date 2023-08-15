import React from 'react';
import { Typography } from '@mui/material';
import { HeaderBox } from './styles';

export default function Header() {
  return (
    <HeaderBox>
      <Typography sx={{ fontSize: '32px' }}>Add your tasks</Typography>
    </HeaderBox>
  );
}
