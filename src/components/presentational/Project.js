import React from 'react';
import styled from 'styled-components';
import image1 from './../../assets/trackingapp.png'

const Wrapper = styled.div`
  grid-area: main-project;
  margin-bottom: 1.45rem;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 400px) {
    margin-left: 0;
    margin-top:0;
  }
  & a{
    text-decoration: none;
  }
`
const Wrapp = styled.div`
  overflow: auto;
  position:relative;
  background: url(${image1});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 300px;
  transition: all .3s ease-in-out;
  &:hover div{
      opacity: 1;
  }
  
`

const Text = styled.div`
  width: 100%;
  background-color: rgba(0,0,0,.5);
  opacity: 0;
  height: 300px;
  text-align: center;
  padding-top: 5%;
`
const P = styled.p`
  margin-left: 20%;
  margin-right: 20%;
  background-color: initial;
  color: white;
`

const Project = (props) => {
    return (
        <Wrapper>
            <h2>{ props.title }</h2>
            <a target="_blank" href={ props.url }>
            <Wrapp>
                <Text>
                    <P>{ props.text }</P> 
                </Text>
            </Wrapp>
            </a>
        </Wrapper>
    );
};

export default Project;