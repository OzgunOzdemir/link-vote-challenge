import React from 'react';
import './Dropdown.css';
import { Dropdown } from 'react-bootstrap';

const DropdownComponent = ({ mostVoted, lessVoted }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            &nbsp;&nbsp; Order By &nbsp;&nbsp;
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => mostVoted()}>Most Voted</Dropdown.Item>
                <Dropdown.Item onClick={() => lessVoted()}>Less Voted</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export { DropdownComponent };