import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footerbox">
                <div className="icons">
                    <div className="icon">
                        <a href="https://www.facebook.com/gustav.nordstrom.3"> 
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                    </div> 
                    
                    <div className="icon">
                        <a href="https://github.com/gnordstrom"> 
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </div>
                    
                    <div className="icon">
                        <a href="https://www.instagram.com/gusnordstrom/"> 
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div> 
                    
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/gustavnordstrom"> 
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                    </div> 
                    
                    <div className="icon">
                        <a href="https://twitter.com/gusnordstrom"> 
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <p>Created by <a href='http://gustavnordstrom.com/'><span id="footerName">Gustav Nordstrom</span></a> - 2016</p>
            </div>

        );
    }
}

export default Footer;