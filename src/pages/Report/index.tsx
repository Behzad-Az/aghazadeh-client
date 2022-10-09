import React, { FC, useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Checkbox,
  FormControlLabel,
  Grid,
  Divider,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64';

import { useAppDispatch } from '../../store/sotre';
import { createPost } from '../../store/actions/posts';
import { Post } from '../../types/posts';
import NavigationBar from '../../components/NavigationBar';

interface Props {};

const Report: FC<Props> = () : JSX.Element => {
  const dispatch = useAppDispatch();

  const [postData, setPostData] = useState<Post>({
    _id: null,
    authorName: '',
    authorEmail: '',
    subjectName: '',
    subjectLocation: '',
    description: '',
    tags: [],
    selectedFile: ''
  });

  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);
  const [screenMessage, setScreenMessage] = useState<string>('');

  const handleSubmit = (event: React.SyntheticEvent) : void => {
    event.preventDefault();
    if (!areInputsValid()) {
      setScreenMessage('Invalid inputs');
      setAgreedToTerms(false);
      return;
    }
    else {
      dispatch(createPost(postData));
      setScreenMessage('Submitted!');
    }
    handleClear();
  };

  const handleClear = () : void => {
    setAgreedToTerms(false);
    setPostData({
      _id: null,
      authorName: '',
      authorEmail: '',
      subjectName: '',
      subjectLocation: '',
      description: '',
      tags: [],
      selectedFile: ''
    });
  };

  const handleTermsCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreedToTerms(event.target.checked);
  };

  const areInputsValid = () : boolean | null => {
    const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (
      postData.authorName.length > 2 &&
      postData.authorEmail.match(validRegex) &&
      postData.subjectName.length > 3 &&
      postData.subjectLocation.length > 3 &&
      postData.description.length > 49 &&
      postData.description.length < 501 &&
      postData.tags.length > 0 &&
      postData.selectedFile.length > 500
    );
  };

  return (
    <Container maxWidth='lg'>

      <NavigationBar />

      <Typography variant='h4' color='whitesmoke' paddingBottom='15px'>
        Report a Rogue Connection
      </Typography>

      <Paper sx={{ padding: '15px', background: 'whitesmoke' }}>
        <Box
          component='form'
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}
        >

          <Box paddingBottom='15px'>
            <Typography variant='subtitle2' color='InfoText'>About You:</Typography>
            <Typography variant='caption' color='InfoText'>
              <Link to='/legal-faq'>Why do we need this?</Link>
            </Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  name='authorName'
                  variant='outlined'
                  label='Your name'
                  fullWidth
                  value={postData.authorName}
                  onChange={e => setPostData({
                    ...postData,
                    authorName: e.target.value
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  name='authorEmail'
                  variant='outlined'
                  label='Your email'
                  fullWidth
                  value={postData.authorEmail}
                  onChange={e => setPostData({
                    ...postData,
                    authorEmail: e.target.value.trim()
                  })}
                />
              </Grid>
            </Grid>
            <Typography variant='caption' color='InfoText'>
              * Email format must be correct like example@example.com
            </Typography>
          </Box>

          <Box>
            <Typography variant='subtitle2' color='InfoText'>About Your Subject</Typography>
            <Divider sx={{ marginBottom: '10px' }} />
            <Grid container spacing={1} paddingBottom='8px'>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  name='subjectName'
                  variant='outlined'
                  label='Who is this about?'
                  fullWidth
                  value={postData.subjectName}
                  onChange={e => setPostData({
                    ...postData,
                    subjectName: e.target.value
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  name='subjectLocation'
                  variant='outlined'
                  label='Where do they live?'
                  fullWidth
                  value={postData.subjectLocation}
                  onChange={e => setPostData({
                    ...postData,
                    subjectLocation: e.target.value
                  })}
                />
              </Grid>
            </Grid>
            <TextField
              name='description'
              variant='outlined'
              label='Description (min. 50, max. 500 characters)'
              multiline
              fullWidth
              value={postData.description}
              onChange={e => setPostData({
                ...postData,
                description: e.target.value
              })}
              sx={{ paddingBottom: '8px' }}
            />
            <TextField
              name='tags'
              variant='outlined'
              label='Tags (e.g. Thief, Corrupt)'
              fullWidth
              value={postData.tags}
              onChange={e => setPostData({
                ...postData,
                tags: e.target.value.split(',')
              })}
              sx={{ paddingBottom: '8px' }}
            />

            
            <Box >
              <Typography variant='body2'>Select photo (.png, .jpg, .jpeg)</Typography>
              <FileBase
                type='file'
                multiple={false}
                onDone={(output: any) => setPostData({ ...postData, selectedFile: output.base64 })}
              />
            </Box>
          </Box>

          <Box textAlign='center' paddingBottom='15px'>
            <Typography variant='caption' color='InfoText'>{ screenMessage }</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  name='SomeName'
                  checked={agreedToTerms}
                  onChange={handleTermsCheckBoxChange}
                  color='primary'
                />
              }
              label='I agree to the terms and conditions.'
              sx={{ width: '100%', justifyContent: 'center' }}
            />
            <Typography variant='caption'>
              <Link to='/terms'>Terms & Conditions</Link>
            </Typography>
          </Box>

          <Box maxWidth='400px' margin='auto'>
            <Button 
              variant='contained'
              color='info'
              size='large'
              type='submit'
              fullWidth
              disabled={!agreedToTerms}
              sx={{ marginBottom: '8px' }}
            >
              Submit
            </Button>

            <Button 
              variant='contained'
              color='error'
              size='small'
              onClick={handleClear}
              fullWidth
            >
              Clear
            </Button>
          </Box>

        </Box>
      </Paper>
      
      <NavigationBar />

    </Container>
  );
};

export default Report;