import React, { FC } from 'react';
import { Grid, CircularProgress } from '@mui/material';

import { useAppSelector } from '../../store/sotre';
import PostCard from './PostCard';

interface Props {};

const PostCardList: FC<Props> = () : JSX.Element => {
  const posts = useAppSelector(state => state.posts);

  if (posts.apiStatus === 'loading') {
    return <CircularProgress />;
  }

  return (
    <Grid
      container
      // sx={{
      //   alignItems: 'stretch',
      // }}
      spacing={3}
    >
      {
        posts.content.map(post => (
          <Grid
            key={post._id}
            item
            xs={12}
            // sm={6}
          >
            <PostCard post={post} />
          </Grid>
        ))
      }
    </Grid>
  );
};

export default PostCardList;