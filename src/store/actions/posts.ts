import * as api from '../../api';
import { Posts, Post } from '../../types/posts';
import { AnyAction } from 'redux';

export const REWRITE_ALL_POSTS = 'REWRITE_ALL_POSTS';
export const REWRITE_A_POST = 'REWRITE_A_POST';
export const ADD_TO_POSTS = 'ADD_TO_POSTS';
export const REMOVE_A_POST = 'REMOVE_A_POST';

const rewriteAllPosts = (newPosts: Posts) => (dispatch: any) : Promise<void> => {
  dispatch({
    type: REWRITE_ALL_POSTS,
    payload: newPosts
  });
  return Promise.resolve();
};

const addToPosts = (newPost: Post) => (dispatch: any) : Promise<void> => {
  dispatch({
    type: ADD_TO_POSTS,
    payload: newPost
  });
  return Promise.resolve();
};

const rewriteAPost = (updatedPost: Post) => (dispatch: any) : Promise<void> => {
  dispatch({
    type: REWRITE_A_POST,
    payload: updatedPost
  });
  return Promise.resolve();
};

const removeAPost = (deletedPost: Post) => (dispatch: any) : Promise<void> => {
  dispatch({
    type: REMOVE_A_POST,
    payload: deletedPost
  });
  return Promise.resolve();
};

export const fetchPosts = (searchPhrase: string | null) => async (dispatch: any) : Promise<void> => {
  try {
    dispatch(rewriteAllPosts({ 
      lastFetched: Date.now(),
      apiStatus: 'loading',
      error: '',
      content: []
    }));
    const { status, data } = await api.fetchPosts(searchPhrase);
    if (status === 200) {
      dispatch(rewriteAllPosts({ 
        lastFetched: Date.now(),
        apiStatus: 'loaded',
        error: '',
        content: data
      }));
    }
    else {
      throw `Server returned unexpected response structure. Status ${status}`;
    }
  } 
  catch (error: any) {
    dispatch(rewriteAllPosts({ 
      lastFetched: Date.now(),
      apiStatus: 'failed',
      error: error,
      content: []
    }));
    console.log(error);
  }
};

export const createPost = (newPost: Post) => async (dispatch: any) => {
  try {
    const { status, data } = await api.createPost(newPost);
    if (status === 200) {
      dispatch(addToPosts(data));
    }
    else {
      throw `Server returned unexpected response structure. Status ${status}`;
    }
  } 
  catch (error) {
    console.log(error);
  }
};

export const updatePost = (id: string, updatedPost: Post) => async (dispatch: any) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);
    dispatch(rewriteAPost(data));
  }
  catch (error) {
    console.log(error);
  }
};

export const deletePost = (deletedPost: Post) => async (dispatch: any) => {
  try {
    await api.deletePost(deletedPost);
    dispatch(removeAPost(deletedPost));
  }
  catch (error) {
    console.log(error);
  }
};

export const incrementCrookCount = (selectedPost: Post) => async (dispatch: any) => {
  try {
    const { data } = await api.incrementCrookCount(selectedPost);
    dispatch(rewriteAPost(data));
  }
  catch (error) {
    console.log(error);
  }
};

export const incrementCleanCount = (selectedPost: Post) => async (dispatch: any) => {
  try {
    const { data } = await api.incrementCleanCount(selectedPost);
    dispatch(rewriteAPost(data));
  }
  catch (error) {
    console.log(error);
  }
};