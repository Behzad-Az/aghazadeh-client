import React, { FC, useEffect } from 'react';
import {
  Container,
  Grow,
  Grid,
  Typography
} from '@mui/material';

import Intro from './Intro';
import SearchBar from './SearchBar';
import LeftSideBar from './LeftSideBar';
import { useAppDispatch } from '../../store/sotre';
import { fetchPosts } from '../../store/actions/posts';
import PostCardList from '../../components/Posts/PostCardList';
import RightSideBar from './RightSideBar';

interface Props {};

const Home: FC<Props> = () : JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts(null));
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Intro />
        <SearchBar />
        <Grid 
          container 
          spacing={2}
          direction={{
            xs: 'column-reverse',
            sm: 'column-reverse',
            md: 'row',
            lg: 'row'
          }}
          paddingTop='20px'
        >
          <Grid item xs={12} sm={12} md={2} lg={3} display='flex' justifyContent='center' alignItems={{ sm: 'center', md: 'flex-start'}}>
            <LeftSideBar />
          </Grid>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <PostCardList />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={3} display='flex' justifyContent='center' alignItems={{ sm: 'center', md: 'flex-start'}}>
            <RightSideBar />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;