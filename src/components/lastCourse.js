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
    height: 27px;
    margin-top: 0;
    margin-right: 4%;
`
export default () =>
    <Wrapper>
        <Decoration>
            <Dot/>
        </Decoration>
        <Instituition>
            <p>2002 - 2007</p>
            <p> Colegio Agustiniano Norte </p>
        </Instituition>
        <Degree>
            <h6>Primaria</h6>
        </Degree>
    </Wrapper>