import React, { Component } from 'react';

// import YouTube from 'react-youtube';

import './Video.css';
class VideoPlayer extends Component {
    render() {
        const opts = {
            height: '750',
            width: '400'
        }
        return (
            <div className="videoPlayer">
                <iframe width="750" height="450" src="https://www.youtube.com/embed/g-3UaO1f7rQ" frameBorder="0" allowFullScreen></iframe>
                {/*<YouTube
                    videoId="g-3UaO1f7rQ" 
                    opts={opts}
                />*/}
            </div>
        );
    }
}

export default VideoPlayer;