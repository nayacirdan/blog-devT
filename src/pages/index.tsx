import Link from 'next/link';
import PostsList from '../components/PostsList/PostsList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsClient } from '../store/actions/actionCreators';
import styled from 'styled-components';

const Title = styled.div`
    color: #212121;
`;
const StyledLink = styled.div`
    cursor: pointer;
    background-color: #fff;
    text-decoration: none;
    width: 15%;
    padding: 10px;
    display: flex;
    justify-content: center;
    border: 2px solid #212121;
    color: #212121;

    &:hover {
        background-color: #212121;
        color: #fff;
        & > a {
            color: #fff;
        }
    }

    & > a {
        color: #212121;
        text-decoration: none;
        font-size: 15px;
    }
`;

const MainWrapper = styled.main`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 85%;
    margin: 0 auto 50px;
`;

const MainHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    align-items: center;
`;

interface IndexProps {
    posts?: Array<postElement>;
}

interface RootState {
    posts?: Array<postElement>;
}

type postElement = {
    title: string;
    body: string;
    id: number;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Index = ({ posts }: IndexProps) => {
    /*START -- IF POSTS WASNT TRANSFERED BY SERVER*/
    if (!(posts && posts.length)) {
        posts = useSelector((state: RootState) => state.posts);
    }
    const dispatch = useDispatch();

    useEffect(() => {
        if (!(posts && posts.length)) {
            dispatch(fetchPostsClient());
        }
    }, []);

    posts = useSelector((state: RootState) => state.posts);

    /*END -- IF POSTS WASNT TRANSFERED BY SERVER*/

    return (
        <>
            <MainWrapper>
                <MainHeading>
                    <Title>
                        <h2>Latest posts</h2>
                    </Title>
                    <StyledLink>
                        <Link href="/posts/new">
                            <a>Create new post</a>
                        </Link>
                    </StyledLink>
                </MainHeading>

                {posts && posts.length ? <PostsList posts={posts} /> : <div>Sorry, there are no posts for now</div>}
            </MainWrapper>
        </>
    );
};

export default Index;
