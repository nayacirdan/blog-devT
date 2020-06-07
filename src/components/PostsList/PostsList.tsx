import React from 'react';
import Link from 'next/link';
import { PostCard } from '../PostCard/PostCard';
import styled from 'styled-components';

interface PostsListProps {
    posts: Array<postElement>;
}

type postElement = {
    title: string;
    body: string;
    id: number;
};

const PostInList = styled.div`
    width: 25%;
    padding: 20px;
    border: 5px solid #212121;
    box-sizing: border-box;
    margin: 10px;

    @media screen and (max-width: 720px) {
        width: 100%;
        margin: 0 0 10px 0;
        padding: 10px;
    }

    & a {
        text-decoration: none;
        color: #616161;
    }
`;

const PostListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
`;

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
    return (
        <PostListWrapper>
            {posts.map((e: postElement) => (
                <PostInList key={e.id}>
                    <Link as={`/posts/${e.id}`} href="/posts/[postId]">
                        <a>
                            <PostCard title={e.title} description={e.body} id={e.id} />
                        </a>
                    </Link>
                </PostInList>
            ))}
        </PostListWrapper>
    );
};
export default PostsList;
