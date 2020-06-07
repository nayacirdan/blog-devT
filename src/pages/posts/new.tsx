import React from 'react';
import NewPostForm from '../../components/Form/Form';
import styled from 'styled-components';

const PageWrapper = styled.div`
    width: 85%;
    margin: 0 auto 50px;
    font-family: 'Verdana', sans-serif;

    & form {
        display: flex;
        flex-direction: column;
        font-family: 'Verdana', sans-serif;

        & input {
            margin: 10px 0;
            font-size: 16px;
            padding: 5px;
            font-family: 'Verdana', sans-serif;
        }

        & textarea {
            margin-bottom: 20px;
            font-size: 16px;
            font-family: 'Verdana', sans-serif;
        }

        & button {
            cursor: pointer;
            padding: 10px;
            border: 2px solid #212121;
            background: none;
            color: #212121;
            font-size: 16px;
            font-family: 'Verdana', sans-serif;

            &:hover {
                border: 2px solid #212121;
                background: #212121;
                color: #fff;
            }
        }
    }
`;
const newPost: React.FC = () => {
    return (
        <>
            <PageWrapper>
                <h1>Create your new post here</h1>
                <NewPostForm />
            </PageWrapper>
        </>
    );
};

export default newPost;
