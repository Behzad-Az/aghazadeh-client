import React, { FC } from 'react';
import {
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {};

const NavigationBar: FC<Props> = () : JSX.Element => {

  return (
    <Typography align='center' variant='subtitle2' color='whitesmoke' paddingY='30px'>
      <Link to='/' style={{ color: 'white' }}>Home</Link> | <Link to='/legal-faq' style={{ color: 'white' }}>Legal FAQ</Link> | <Link to='/terms' style={{ color: 'white' }}>Terms & Conditions</Link> | <Link to='/privacy' style={{ color: 'white' }}>Privacy Policy</Link>
    </Typography>
  );
};

export default NavigationBar;