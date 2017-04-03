import React, { Component } from 'react';

import Logo from './Logo';
import NavBar from './NavBar';
import Links from './Links';

import './css/LeftSide.css';

class LeftSide extends Component {
    render() {
        return (
            <div className="left-side">
                <Logo />
                <NavBar />
                <Links />
            </div>
        );
    }
}

export default LeftSide;