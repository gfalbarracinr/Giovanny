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
    width: 110px;

    @-moz-document url-prefix() {
        & {
            font-size: 80%;
        }
        @media (max-width: 400px){
            font-size: 75%;
            & *{
            font-size: 75%;
            }
        }
    }
`
const Degree = styled.div`
    margin-left: 15%;
    color: black;
    & *{
        margin: 0;
    }
    @media (max-width: 500px){
        font-size: 80%;
        & > p{
            font-size: 80%;
        }
    }
    @-moz-document url-prefix() {
        & {
            font-size: 80%;
        }
        @media (max-width: 400px){
            font-size: 75%;
            & *{
            font-size: 75%;
            }
        }
    }
    

    width:40%;
`
const Decoration = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    margin-top: 4%;
    margin-right: 4%;
`
export default ({ year, institution, degree}) => {

return (
    
        <Wrapper>
            <Decoration>
                <Dot/>
            </Decoration>
            <Instituition>
                <p>{year}</p>
                <p>{institution}</p>
            </Instituition>
            <Degree>
                <h6>{degree.career}</h6>
                <p>{degree.description}</p>
            </Degree>
        </Wrapper>
    )
}