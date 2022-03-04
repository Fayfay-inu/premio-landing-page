import React from 'react';
import styled from 'styled-components';
import arrow from '../img/arrow.svg'

function Secondarybutton({name}) {
    return (
        <SecondaryButtonStyled>
            {name}
            <img src={arrow} alt="" />
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = styled.button`
    background-color: #2b0505;
    padding: 1rem 2rem;
    font-family: #4f1106;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        padding-left: .9rem;
    }
`;

export default Secondarybutton;
