import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left: 10%;
    display: flex;
`
const Dot = styled.div`
    margin-top: 20px;
    height: 7px;
    width: 7px;
    background-color: #868586;
    border-radius: 50%;
    margin-left: -4px;
`

const Instituition = styled.div`
    color: 	#B7B7B9;
    & *{
        margin: 0;
    }
    max-width: 110px;
`
const Degree = styled.div`
    margin-left: 15%;
    color: black;
    & *{
        margin: 0;
    }
`
const Decoration = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid #868586;
    height: 120px;
    margin-top: 0;
    margin-right: 4%;
`
export default ({ year, institution, degree}) =>
    <Wrapper>
        <Decoration>
            <Dot/>
        </Decoration>
        <Instituition>
            <p>{ year }</p>
            <p>{ institution }</p>
        </Instituition>
        <Degree>
            <h6>{ degree.career }</h6>
            <p>{ degree.description }</p>
        </Degree>
    </Wrapper>