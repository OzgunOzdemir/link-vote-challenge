import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const ListItem = ({ points, linkName, linkUrl, upVoteHandler, downVoteHandler }) => {
    return (
        <div className="link-container">
            <div className="point-container">
                <div className="point-text-container">
                    <span className="points-number">{points}</span>
                    <span className="points-text">POINTS</span>
                </div>
            </div>
            <div className="link-detail">
                <div className="link-name">
                    <span>{linkName}</span>
                </div>
                <div className="link-url">
                    ({linkUrl})
                        </div>
                <div className="vote-container">
                    <div className="up-vote" onClick={() => upVoteHandler()}>
                        <FontAwesomeIcon icon={faArrowUp} />&nbsp;Up Vote
                          </div>
                    <div className="down-vote" onClick={() => downVoteHandler()}>
                        <FontAwesomeIcon icon={faArrowDown} />&nbsp;Down Vote
                          </div>
                </div>
            </div>
        </div>

    )
}

export { ListItem }