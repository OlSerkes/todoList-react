import { Colors } from '../../styles';
import { Typography, Box } from '@mui/material';
import style from './Header.module.css';

export default function Header() {
  return (
    <Box>
      <Typography className={style.root}>Add your tasks</Typography>
    </Box>
  );
}
