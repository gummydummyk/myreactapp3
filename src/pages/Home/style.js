import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    padding: 50px  0;
    h1 {
        color: #000;
    }

    p {
        font-size: 14px;
        text-align: justify;
    }

    button {
        background: transparent;
        border-radius: 3px;
        border: 2px solid #000;
        color: #000;
        padding: 1em 1.75em;
        cursor: pointer;
    }

    ${props => props.primary && css`
        background: #252525;
        color: #fff;

        h1 {
            color: red;
        }
    `}

    border: ${props => (props.round ? '2px solid black' : '')}
`;

export default Wrapper;