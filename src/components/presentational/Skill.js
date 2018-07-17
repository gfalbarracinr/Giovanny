import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex; 
    width: 95%;
    margin-bottom: 5%;

`

const Div = styled.div`
    background-color: #EDEDED;
    width: 100%;
    justify-self:flex-end;
    height: 15px;
    display: inherit;
    border-radius: 5px;
    overflow: hidden;  
`
const Span = styled.span`
    background-color: #4AB3F4;
    width: ${props => props.percentage + '%'};
    border-radius: 5px;
    animation-name: fadeInLeft;
    animation-fill-mode: forwards;
    animation-duration: 3s;
    display: block;


@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }100% {
    opacity: 1;
    transform: none;
  }
}

`

const H5 = styled.h5`
    justify-self: flex-start;
    min-width: 120px;

`
const Skill = (props) => {
    return (
        <Wrapper>
            <H5>{props.name}</H5>
            <Div>
                <Span percentage={props.percentage}></Span>
            </Div>
        </Wrapper>
    );
};

export default Skill;