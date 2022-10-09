import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import posts from './reducers/posts';

const reducer = combineReducers({ posts });

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = useDispatch;

// export type RootState = ReturnType<typeof reducer>;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = configureStore({ reducer });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector