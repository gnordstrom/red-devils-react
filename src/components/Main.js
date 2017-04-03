import React, { Component } from 'react';

// import Logo from './Logo';
// import NavBar from './NavBar';
import LeftSide from './left-side/LeftSide';
import RightSide from './right-side/RightSide';

import './Main.css';

// import Home from './Home';
class Main extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <LeftSide />
                <RightSide>
                    {this.props.children}
                </RightSide>
                    {/*{this.props.children}*/}
    
            </div>
        );
    }
}

export default Main;