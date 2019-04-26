import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return(
            <div>
                <footer className="bg-gray text-grey">
                    <div className="container">
                        <div className="main-footer">
                            <h5>Follow Us</h5>
                            <div className="social-icon">
                                <a href="#">
                                    <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
                                </a>
                                <a href="#">
                                    <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
                                </a>
                                <a href="#">
                                    <span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                                </a>
                                <a href="#">
                                    <span><i className="fa fa-pinterest" aria-hidden="true"></i></span>
                                </a>
                                <a href="#">
                                    <span><i className="fa fa-instagram" aria-hidden="true"></i></span>
                                </a>
                            </div>
                            <p>Copyright By Black 2018 | All Rights Reserved.</p>
                            <small><a href="http://design69943.healthywebsites.org/">http://design69943.healthywebsites.org/</a></small>
                        </div> 
                        <div className="scrollTop">
                            <a href="#top"><i className="fa fa-angle-up" aria-hidden="true"></i></a>
                        </div>    
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;