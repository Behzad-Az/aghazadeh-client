import React, { FC, useState } from 'react';
import {
  Box,
  TextField,
  Button
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

import { useAppDispatch } from '../../store/sotre';
import { fetchPosts } from '../../store/actions/posts';

interface Props {};

const SearchBar: FC<Props> = () : JSX.Element => {
  const dispatch = useAppDispatch();
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  return (
    <Box
      alignContent='center'
      display='flex'
      margin='auto'
      paddingBottom='15px'
    >
      <TextField
        id='filled-required'
        label='Search by name or location'
        variant='filled'
        color='info'
        sx={{
          flex: 0.9,
          background: 'whitesmoke',
          borderRadius: 0,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
        onChange={e => setSearchPhrase(e.target.value.trim())}
      />
      <Button 
        variant='contained'
        color='primary'
        sx={{
          flex: 0.1,
          borderRadius: 0,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5
        }}
        onClick={() => dispatch(fetchPosts(searchPhrase))}
      >
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default SearchBar;
