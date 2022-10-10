import React, { FC, useEffect } from 'react';
import {
  Container,
  Grow,
  Grid
} from '@mui/material';

import Intro from './Intro';
import SearchBar from './SearchBar';
import LeftSideBar from './LeftSideBar';
import { useAppDispatch } from '../../store/sotre';
import { fetchPosts } from '../../store/actions/posts';
import PostCardList from '../../components/Posts/PostCardList';
import RightSideBar from './RightSideBar';
import NavigationBar from '../../components/NavigationBar';
import AppHeaderBar from '../../components/AppHeaderBar';

interface Props {};

const Home: FC<Props> = () : JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts(null));
  }, [dispatch]);

  return (
    <Grow in>
      <Container maxWidth='lg'>
        <AppHeaderBar />
        <Intro />
        <Grid 
          container 
          spacing={2}
          direction={{
            xs: 'column-reverse',
            sm: 'column-reverse',
            md: 'row',
            lg: 'row'
          }}
        >
          <Grid item xs={12} sm={12} md={2} lg={3} display='flex' justifyContent='center' alignItems={{ sm: 'center', md: 'flex-start'}}>
            <LeftSideBar />
          </Grid>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <SearchBar />
            <PostCardList />
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={3} display='flex' justifyContent='center' alignItems={{ sm: 'center', md: 'flex-start'}}>
            <RightSideBar />
          </Grid>
        </Grid>
        <NavigationBar />
      </Container>
    </Grow>
  );
};

export default Home;