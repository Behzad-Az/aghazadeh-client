import React, { FC } from 'react';
import {
  Typography,
  Box
} from '@mui/material'

interface Props {};

const LeftSideBar: FC<Props> = () : JSX.Element => {
  const HASHTAG_SET_MARGIN_BTM = 40;
  const hashtags = [
    {
      color: 'green',
      text: 'MahsaAmini',
      marginBottom: 0
    },
    {
      color: 'white',
      text: 'PS752',
      marginBottom: 0
    },
    {
      color: 'Red',
      text: 'HadisNajafi',
      marginBottom: HASHTAG_SET_MARGIN_BTM
    },
    {
      color: 'green',
      text: 'Women',
      marginBottom: 0
    },
    {
      color: 'white',
      text: 'Life',
      marginBottom: 0
    },
    {
      color: 'red',
      text: 'Freedom',
      marginBottom: HASHTAG_SET_MARGIN_BTM
    }
  ];
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
        xs: '100%',
        sm: '100%',
        md: 'calc(16.65% - 20px)',
        lg: 'calc(16.65% - 20px)'
      }}
    >
      {
        hashtags.map((hashtag, index) => {
          return (
            <Typography key={index} align='center' variant='h6' color={hashtag.color} marginBottom={`${hashtag.marginBottom}px`}>
              #{ hashtag.text }
            </Typography>
          )
        })
      }
    </Box>
  );
}

export default LeftSideBar;