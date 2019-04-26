import styled from 'styled-components';
import Image1 from '../../assets/images/home-01-slide-01.jpg';
import Image2 from '../../assets/images/home-01-slide-02.jpg';
import Image3 from '../../assets/images/home-01-slide-03.jpg';

const SwiperWrapper = styled.div`
    .swiper-button-prev, .swiper-button-next {
        z-index: 100;
        position: absolute;
        bottom: 50px;
        font-size: 14px;
        text-align: center;
        display: block;
        text-transform: uppercase;
        font-weight: 500;
        top: unset;
        letter-spacing: .120em;
        color: #fff;
        cursor: pointer;
    }

    .swiper-button-prev span, .swiper-button-next span {
        display: inline;
    }

    .swiper-button-prev {
        padding-left: 35px;
        left: 30px;
        width: auto;
        height: auto;
    }

    .swiper-button-next {
        padding-right: 35px;
        right: 30px;
        left: unset;
        width: auto;
        height: auto;
    }

    .swiper-button-prev:before {
        position: absolute;
        left: 0;
        top: 44%;
        transform: translateY(-50%);
        content: '\f060';
        font-family: 'FontAwesome';
        font-size: 20px;
    }

    .swiper-button-next:after {
        position: absolute;
        right: 0;
        top: 44%;
        transform: translateY(-50%);
        content: '\f061';
        font-family: 'FontAwesome';
        font-size: 20px;
    }

    .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
        background-image: none;
    }

    .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
        background-image: none;
    }

    .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
        opacity: .35;
    }

    .customized-swiper-bg {
        background-size: cover;
    }

    .slide-bg-1 {
        background-image: url(${Image1});
    }

    .slide-bg-2 {
        background-image: url(${Image2});
    }

    .slide-bg-3 {
        background-image: url(${Image3});
    }

    .customized-swiper-bg:before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(27, 28, 30, 0.3);
    }

    .row-wrapper {
        min-height: auto;
        padding-top: 80px;
        padding-bottom: 80px;
        color: #fff;
    }

    .row-wrapper h1 {
        font-size: 36px;
        line-height: 1.07143;
        font-weight: 400;
    }

    @media screen and (min-width: 1200px) {
        .swiper-container {
            min-height: 600px !important;
        }

        .swiper-button-prev {
            left: calc(50% - 516.5px);
        }
    
        .swiper-button-next {
            left: calc(50% - 361px);
            right: auto;
        }

        .swiper-button-prev, .swiper-button-next {
            bottom: 90px;
        }

        .row-wrapper {
            min-height: 100vh;
            padding-top: 200px;
            padding-bottom: 160px;
        }

        .row-wrapper h1 {
            font-size: 84px;
        }
    }

    @media screen and (min-width: 1600px) {
        .swiper-button-prev {
            left: calc(50% - 716.5px);
        }
    
        .swiper-button-next {
            left: calc(50% - 561px);
        }
    }
    
`;

export default SwiperWrapper;