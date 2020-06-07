/* eslint-disable prefer-const */
import { HYDRATE } from 'next-redux-wrapper';
import { DELETE_POST, FETCH_POSTS_CLIENT, GET_POSTS_SERVER } from '../actions/actionConstants';
import { Reducer } from 'redux';

const initialState = {};
type ActionObject = {
    type: string;
    payload?: any;
};

const rootReducer: Reducer = (state = initialState, action: ActionObject) => {
    switch (action.type) {
        case HYDRATE:
            if (action.payload.app === 'init') delete action.payload.app;
            if (action.payload.page === 'init') delete action.payload.page;
            return { ...state, ...action.payload };

        case GET_POSTS_SERVER:
            return { ...state, posts: action.payload };

        case FETCH_POSTS_CLIENT:
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let posts = [];
            return { ...state, posts: action.payload };

        case DELETE_POST:
            return { ...state };

        default:
            return state;
    }
};

export default rootReducer;
