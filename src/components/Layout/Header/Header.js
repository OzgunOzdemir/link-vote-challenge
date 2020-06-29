import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="company-name">
                    <span className="hepsiburada-text">hepsiburada</span>
                    <span className="com-text">.com</span>
                </div>
                <div className="challenge-name">
                    <span className="link-text">Link</span>
                    <span className="vote-text">Vote</span>&nbsp;
                    <span className="challenge-text">Challenge</span>
                </div>
            </div>
            <hr className="hr"/>
        </div>

    )
}

export { Header }