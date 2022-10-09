import React, { FC } from 'react';
import {
  Box,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {};

const RightSideBar: FC<Props> = () : JSX.Element => {
  const navigate = useNavigate();
  return (
    <Box 
      overflow='hidden'
      position={{
        xs: 'relative', 
        sm: 'relative', 
        md: 'fixed',
        lg: 'fixed'
      }}
      width={{
        xs: '80%',
        sm: '60%',
        md: 'calc(16.65% - 20px)',
        lg: 'calc(16.65% - 20px)'
      }}
      maxWidth='240px'
      padding={0}
    >
      <Button 
        // className={classes.buttonSubmit}
        variant='contained'
        color='primary'
        size='large'
        type='submit'
        fullWidth
        onClick={() => navigate('/report')}
      >
        + Report #Aghazadehs Here
      </Button>
    </Box>
  );
}

export default RightSideBar;