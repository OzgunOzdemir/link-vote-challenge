import React from 'react';
import './Input.css';

const InputComponent = ({
    type,
    id,
    name,
    onChange,
    placeholder
}) => {
    return(
        <React.Fragment>
            <input type={type} id={id} name={name} onChange={onChange} placeholder={placeholder} />
        </React.Fragment>   
    );
}

export { InputComponent };