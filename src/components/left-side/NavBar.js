import React, { Component } from 'react';
import { Link } from 'react-router';

import './css/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">

                <Link to="/"><button className="btn btn-default btn-lg">Home</button></Link>
                <Link to="/results"><button className="btn btn-default btn-lg">Results</button></Link>
                <Link to="/roster"><button className="btn btn-default btn-lg">Roster</button></Link>
                <Link to="/schedule"><button className="btn btn-default btn-lg">Schedule</button></Link>
                <Link to="/table"><button className="btn btn-default btn-lg">Table</button></Link>
            </div>
        );
    }
}

export default NavBar;