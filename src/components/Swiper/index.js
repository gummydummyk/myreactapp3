import React, { Component } from "react";
import Swiper from 'react-id-swiper';
import SwiperWrapper from './style';
import "react-id-swiper/src/styles/css/swiper.css";
import { Navigation, EffectFade, Autoplay } from 'swiper/dist/js/swiper.esm';

const params = {
    modules: [Navigation, EffectFade, Autoplay],
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'      
    },
    effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    loop: true,
    autoplay: {
        delay: 3000,
      },
    renderPrevButton: () => <div className="swiper-button-prev"><span>Prev</span></div>,
    renderNextButton: () => <div className="swiper-button-next"><span>Next</span></div>,
    spaceBetween: 30
  };

class ReactSwiper extends Component {
    
    render() {
        return (
            <div>
                <SwiperWrapper>
                    <Swiper {...params}>
                        <div className="swiper-slide customized-swiper-bg slide-bg-1">
                            <div className="container">
                                <div className="row row-wrapper">
                                    <div className="col-lg-10">
                                    <h1>If it`s worth building,<br/>It`s worth building well.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide customized-swiper-bg slide-bg-2">
                            <div className="container">
                                <div className="row row-wrapper">
                                    <div className="col-lg-10">
                                    <h1>Slide 2</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide customized-swiper-bg slide-bg-3">
                            <div className="container">
                                <div className="row row-wrapper">
                                    <div className="col-lg-10">
                                    <h1>Slide 3</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Swiper>
                </SwiperWrapper>
            </div>
        );
    }
}

export default ReactSwiper;