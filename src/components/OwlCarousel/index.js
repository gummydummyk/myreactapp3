import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel2';

const options = {
    items: 1,
    nav: true,
    loop: true,
    autoplay: true
};

class OwlSlider extends Component {
    render() {
        return (
            <div>
                <OwlCarousel options={options} >
                    <div><img src={require('../../assets/images/home-03-485x526.jpg')} alt="slide1" /></div>
                    <div><img src={require('../../assets/images/home-03-485x526.jpg')} alt="slide2" /></div>
                    <div><img src={require('../../assets/images/home-03-485x526.jpg')} alt="slide3" /></div>
                </OwlCarousel>
            </div>
        );
    }
}

export default OwlSlider;