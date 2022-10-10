import React, { FC } from 'react';
import { Grid, CircularProgress, Typography, Box } from '@mui/material';

import { useAppSelector } from '../../store/sotre';
import PostCard from './PostCard';

interface Props {};

const PostCardList: FC<Props> = () : JSX.Element => {
  const posts = useAppSelector(state => state.posts);

  if (posts.apiStatus === 'loading') {
    return <Box textAlign='center'><CircularProgress /></Box>;
  }

  if (posts.apiStatus === 'failed') {
    return <Typography textAlign='center' variant='body1' color='whitesmoke'>Something went wrong.</Typography>;
  }

  if (posts.content.length < 1) {
    return <Typography textAlign='center' variant='body1' color='whitesmoke'>No results found.</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {
        posts.content.map(post => (
          <Grid key={post._id} item xs={12}>
            <PostCard post={post} />
          </Grid>
        ))
      }
    </Grid>
  );
};

export default PostCardList;