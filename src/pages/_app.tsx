import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';
import axios from 'axios';
import { GET_POSTS_SERVER } from '../store/actions/actionConstants';
import Header from '../components/Header/Header';

import styled from 'styled-components';

const StyledBody = styled.body`
    margin: 0;
    padding: 0;
    font-family: 'Verdana', sans-serif;
`;

class MyApp extends App {
    static getInitialProps = async ({ Component, ctx }) => {
        let posts = [];

        await axios.get('https://simple-blog-api.crew.red/posts').then((res) => {
            posts = res.data;
        });
        ctx.store.dispatch({ type: GET_POSTS_SERVER, payload: posts });

        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
                // Some custom thing for all pages
                posts: posts,
            },
        };
    };

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider store={store}>
                <StyledBody>
                    <Header />
                    <Component {...pageProps} />
                </StyledBody>
            </Provider>
        );
    }
}

const makeStore = () => {
    return store;
};
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
