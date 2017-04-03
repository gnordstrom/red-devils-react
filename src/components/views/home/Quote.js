import React, { Component } from 'react';
import './Quote.css';

class Quote extends Component {
    render() {
        return (
            <div className="content-header">
                <p>{this.props.text}</p>
                <p>- {this.props.author}</p>
            </div>
        );
    }
}

export default Quote;