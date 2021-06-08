import React from 'react';
import './sass/header.scss';
import PersonIcon from '@material-ui/icons/Person';

function Header() {
    return (
        <div className="header">
            {/* <PersonIcon /> */}
            <PersonIcon fontSize="large" />
            <h1>Hello</h1>
        </div>
    )
}

export default Header
