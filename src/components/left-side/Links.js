import React, { Component } from 'react';

import './css/Links.css';

class Links extends Component {
    render() {
        return (
            <div className="links">
                <h5>Links:</h5>
                <a href="http://www.goal.com/en-gb">Goal.com</a>
                <br />
                <a href="http://www.skysports.com/manchester-united">Sky Sports</a>
                <br />
                <a href="http://www.bbc.com/sport/football/teams/manchester-united">BBC Football</a>
                <br />
                <a href="http://www.manutd.com">Official Website</a>
            </div>
        );
    }
}

export default Links;