import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Box
} from '@mui/material';

interface Props {};

const Intro: FC<Props> = () : JSX.Element => {
  return (
    <Box textAlign='center' color='whitesmoke'>
      <Typography variant='h5' marginBottom='15px'>
        The world should have no place for corrupt Iranian money!
      </Typography>
      <Typography variant='subtitle1' marginBottom='15px'>
        Our mission is to expose those who have profited from the rogue Iranian regime at the expense of the Iranian public. Why should the regime enablers live freely and comfortably around the globe while Iranians inside Iran suffer under a tyrannical and corrupt regime.
      </Typography>

      <Typography variant='subtitle1'>
        We scrape Twitter and Instagram, and save reported #aghazades here forever and for everyone to see. If you know an #aghazade, please report them here.
      </Typography>

      <Typography variant='subtitle1' marginBottom='15px'>
        Is this legal? Well, is enabling a murderous regime legal? Visit <Link to='/legal-faq' style={{ color: 'whitesmoke' }}>Legal FAQ</Link> for more info. 
      </Typography>
    </Box>
  );
};

export default Intro;