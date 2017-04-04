import React, { Component } from 'react';
import utdLogo from './manutd-logo-icon.jpg';
import './css/Header.css';

class Header extends Component {
    
    render() {
        return (
            <div className="header">
                <div className="header-left">
                    {/*<img src={require('./manutd-logo-icon.jpg')} alt="Red Devils Logo" />*/}
                    <img src={utdLogo} alt="Red Devils Logo" />
                </div>
                <div className="header-center">
                    <h2>Manchester United FC</h2>
                </div>
                <div className="header-left">
                    <img src={utdLogo} alt="Red Devils Logo" />
                </div>
            </div>
        );
    }
}

export default Header;