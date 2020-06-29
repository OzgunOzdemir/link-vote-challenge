import React from 'react';
import './Button.css';

const ButtonComponent = ({
   text,
   onClick
}) => {
    return(
        <button className="Button" onClick={onClick}>{text}</button>
    );
}

export { ButtonComponent };