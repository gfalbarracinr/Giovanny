import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left: 10%;
    display: flex;
`
const Dot = styled.div`
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
    height: 100px;
    margin-top: 4%;
    margin-right: 4%;
`
export default () =>
    <Wrapper>
        <Decoration>
            <Dot/>
        </Decoration>
        <Instituition>
            <p>2013 - 2019</p>
            <p> Universidad Nacional </p>
        </Instituition>
        <Degree>
            <h6>Ingeniería Sistemas</h6>
            <p>Actualmente estoy en 8
               semestre, mi grado Octubre del
               2019</p>
        </Degree>
    </Wrapper>