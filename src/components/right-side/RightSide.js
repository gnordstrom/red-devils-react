import React, { Component } from 'react';

import Header from './Header';
// import Footer from './Footer';

import './css/RightSide.css';

class RightSide extends Component {
    render() {
        return (
            <div className="right-side">
                <Header />
                
                <div className="views">
                    {this.props.children}
                </div>
                {/*<Footer />*/}
            </div>
        );
    }
}

export default RightSide;