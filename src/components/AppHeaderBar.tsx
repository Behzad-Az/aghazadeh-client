import React, { FC } from 'react';
import {
  AppBar,
  Typography
} from '@mui/material';

import iran from '../images/iran.png';

interface Props {};

const AppHeaderBar: FC<Props> = () : JSX.Element => {
  return (
    <AppBar 
      position='static' 
      color='inherit'
      sx={{
        borderRadius: '15px',
        margin: '20px 0',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant='h4' align='center'color='InfoText'>
        Report an #Aghazadeh
      </Typography>
      <img src={iran} alt='iran' height='60' style={{ marginLeft: '15px' }} />
    </AppBar>
  );
};

export default AppHeaderBar;