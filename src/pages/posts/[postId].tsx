import axios from 'axios';
import React from 'react';
import { deletePost } from '../../store/actions/actionCreators';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button/Button';
import { NextPage } from 'next';
import styled from 'styled-components';

interface Props {
    post?: {
        title: string;
        body: string;
        id: number;
    };
}

const PostPageWrapper = styled.div`
    width: 85%;
    margin: 0 auto;

    & button {
        cursor: pointer;
        padding: 10px;
        border: 2px solid #212121;
        background: none;
        color: #212121;
        font-size: 16px;

        &:hover {
            border: 2px solid #212121;
            background: #212121;
            color: #fff;
        }
    }
`;

const PostId: NextPage<Props> = ({ post }) => {
    const dispatch = useDispatch();
    return (
        <PostPageWrapper>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Button
                btnType="button"
                text="Delete this post"
                onClick={() => {
                    dispatch(deletePost(post.id));
                }}
            />
        </PostPageWrapper>
    );
};

export default PostId;

PostId.getInitialProps = async (ctx): Promise<{ post }> => {
    const { query } = ctx;
    let post = {};
    await axios.get(`https://simple-blog-api.crew.red/posts/${query.postId}`).then((res) => {
        post = res.data;
    });
    return { post: post };
};
