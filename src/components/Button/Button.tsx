import React from 'react';

interface ButtonComponentProps {
    btnType: 'submit' | 'reset' | 'button';
    text?: string;
    innerElement?: React.Component;
    onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonComponentProps> = ({ btnType, text, onClick }) => {
    return (
        <button onClick={onClick} type={btnType}>
            {text}
        </button>
    );
};

export default Button;
