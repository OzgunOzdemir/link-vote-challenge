import React from 'react';
import './SubmitLinkBox.css';

const SubmitLinkBox = ({ text, onClick }) => {
    return (
        <div className="add-link-container" onClick={() => onClick()}>
            <div className="plus-container">
                <div className="plus-icon-container">
                    <span className="plus">+</span>
                </div>
            </div>
            <div className="text-container">
                <span className="submit-text">{text}</span>
            </div>
        </div>

    )
}

export { SubmitLinkBox }