import React from 'react';
import "./Alert.css";

const AlertComponent = ({
   linkName,
   linkStatus
}) => {
    return(
        <div className="alert-container">
            <span className="linkName-text">{linkName}</span>&nbsp;
            <span className="linkStatus-text">{linkStatus}</span>
        </div>
    );
}

export { AlertComponent };