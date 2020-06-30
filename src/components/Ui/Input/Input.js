import React from 'react';
import './Input.css';

const InputComponent = ({
    type,
    id,
    name,
    onChange,
    placeholder,
    value
}) => {
    return(
        <React.Fragment>
            <input type={type} id={id} name={name} onChange={onChange} placeholder={placeholder} value={value} />
        </React.Fragment>   
    );
}

export { InputComponent };