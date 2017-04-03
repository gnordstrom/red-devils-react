import React, { Component } from 'react';

import Quote from './Quote';
import VideoPlayer from './Video';
import Footer from './Footer';

import './Home.css';

class Home extends Component {
    render() {
        const quoteText = "You can change your wife, change your politics, change your religion. But never, never can you change your favorite football team!";
        const author = "Eric Cantona"
        return (
            <div>
                <Quote text={quoteText} author={author}/>
                <VideoPlayer />
                <Footer />
            </div>
        );
    }
}

export default Home;