import React from 'react';
import styled from 'styled-components';

interface PostCardProps {
    title: string;
    description: string;
    id: number;
}

const PostCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    word-wrap: break-word;

    & p {
        font-size: 16px;
        word-wrap: normal;
        white-space: nowrap;
        overflow: hidden;
        padding: 5px;
        text-overflow: ellipsis;
    }
`;
export const PostCard: React.FC<PostCardProps> = ({ title, description, id }) => {
    return (
        <PostCardWrapper>
            <h3>{title}</h3>
            <p>{description}</p>
        </PostCardWrapper>
    );
};
