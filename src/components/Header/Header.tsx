import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background-color: #212121;
    color: #fff;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    margin-bottom: 30px;
`;

const Logo = styled.div`
    font-weight: light;
    font-size: 40px;
    text-align: center;
`;

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <div>
                <Logo onClick={() => Router.push('/')}>BlogLogo</Logo>
                <h1>Welcome to my amazing blog</h1>
                <hr />
                <p>
                    Test task.
                    <br /> Author: Oksana Kirdan. <br />
                    Vacancy: Junior Frontend Developer on React
                </p>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
