import React, { FC } from 'react';
import { 
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';
import { 
  ThumbUpAlt as ThumbUpAltIcon,
  ThumbDownAlt as ThumbDownAltIcon,
  Place as PlaceIcon
} from '@mui/icons-material';
// import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

import moment from 'moment';

import { useAppDispatch } from '../../store/sotre';
import { incrementCrookCount, incrementCleanCount } from '../../store/actions/posts';
import { Post as PostType } from '../../types/posts';

// import useStyles from './styles';

interface Props {
  post: PostType;
};

const PostCard: FC<Props> = ({ post }) : JSX.Element => {
  // const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative'
      }}
    >

      <CardMedia
        image={post.selectedFile}
        title={post.subjectLocation}
        sx={{
          height: 0,
          paddingTop: '56.25%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          // backgroundBlendMode: 'darken',
        }}
      />

      <CardContent>
        
        <Typography variant='h4' marginBottom={0} color='CaptionText'>
          { post.subjectName }
        </Typography>

        <Typography variant='body1' paddingBottom='5px' color='InfoText'>
          <PlaceIcon fontSize='small' />from { post.subjectLocation }
        </Typography>

        <Typography variant='caption' color='GrayText'>
          Reported {moment(post.createdAt).fromNow()}
        </Typography>

        <Typography variant='body2' color='GrayText' paddingY='10px'>
          { post.description }
        </Typography>

        <Typography variant='body2' color='GrayText'>
          {
            post.tags.map(tag => `#${tag.trim()} `)
          }
        </Typography>

      </CardContent>
        
      <CardActions 
        // className={classes.cardActions}
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >

        <Button size='small' color='primary' onClick={() => dispatch(incrementCrookCount(post))}>
          { post.crookCount }&nbsp;<ThumbDownAltIcon fontSize='small' />&nbsp;He/she is a crook.&nbsp;
        </Button>

        <Button size='small' color='primary' onClick={() => dispatch(incrementCleanCount(post))}>
          { post.cleanCount }&nbsp;<ThumbUpAltIcon fontSize='small' />&nbsp;He/she is clean.&nbsp;
        </Button>

      </CardActions>

    </Card>
  );
};

export default PostCard;