import { FETCH_POSTS_CLIENT, DELETE_POST, ADD_NEW_POST } from './actionConstants';
import axios from 'axios';
import Router from 'next/router';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

type StateType = {
    posts: postElement[];
};

type postElement = {
    title: string;
    body: string;
    id: number;
};
//Because dispatch type already has types from thunk:

export const fetchPostsClient = (): ThunkAction<void, StateType, unknown, Action<string>> => (
    dispatch: ThunkDispatch<StateType, unknown, Action<string>>,
) => {
    axios.get('https://simple-blog-api.crew.red/posts').then((res) => {
        dispatch({ type: FETCH_POSTS_CLIENT, payload: res.data });
    });
};

export const deletePost = (postId: number): ThunkAction<void, StateType, unknown, Action<string>> => (
    dispatch: ThunkDispatch<StateType, unknown, Action<string>>,
) => {
    axios
        .delete('https://simple-blog-api.crew.red/posts/' + postId)
        .then(() => dispatch({ type: DELETE_POST }))
        .then(() => Router.push('/'));
};

export const addNewPost = (formValues: {
    title: string;
    body: string;
}): ThunkAction<void, StateType, unknown, Action<string>> => (
    dispatch: ThunkDispatch<StateType, unknown, Action<string>>,
) => {
    axios
        .post('https://simple-blog-api.crew.red/posts', { title: formValues.title, body: formValues.body })
        .then(() => {
            dispatch({ type: ADD_NEW_POST });
        })
        .then(() => Router.push('/'));
};
