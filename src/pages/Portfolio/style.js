import styled from 'styled-components';

const Wrapper = styled.div`
    .swiper-wrap-default {
        padding-left: 0;
        position: relative;
    }

    .swiper-left-sidebar {
        background-color: #1B1C1E;
        color: #888;
        width: 100%;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .swiper-left-sidebar span {
        display: block;
        width: 100%;
        font-size: 12px;
        letter-spacing: 0.340em;
        font-weight: 700;
    }

    section {
        padding-top: 120px;
        padding-bottom: 55px;
        position: relative;
        color: #fff;
    }

    section:before {
        position: absolute;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }

    .bg-grey:before {
        background-color: #1B1C1E;
    }

    .bg-blue:before {
        background-color: #8DB1BF;
    }

    .counter-box {
        text-align: center;
    }

    .counter-box span {
        color: #1B1C1E;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: .340em;
        text-transform: uppercase;
    }

    .counter {
        color: #8DB1BF;
        font-size: 88px;
    }

    @media screen and (min-width: 1200px) {

        .bg-grey:before {
            right: calc(50% - (1200px / 2 + 100px));
        }
    
        .bg-blue:before {
            left: calc(50% - (1200px / 2 + 100px));
        }

        .swiper-wrap-default {
            padding-left: 6.25vw;
        }
        
        .swiper-left-sidebar {
            width: 6.25vw;
            position: absolute;
            z-index: 1;
            top: 0;
            bottom: 0;
            left: 0;
        }

        .swiper-left-sidebar span {
            min-width: 20px;
            width: 25px;
            writing-mode: vertical-lr;
            transform: rotate(180deg);
            white-space: nowrap;
        }

        .swiper-wrap-default .swiper-left-sidebar:before {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60px;
            background-color: #fff;
            content: "";
            display: inline-block;
        }
    }
`;

export default Wrapper;