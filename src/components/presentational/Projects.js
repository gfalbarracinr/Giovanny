import React from 'react';
import styled from 'styled-components';
import observatorio from '../../assets/odd.png'
import bulldog from '../../assets/bdb.png'

const Wrapper = styled.div`
  margin-bottom: 2.45rem;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 400px) {
    margin-left: 0;
    margin-top:0;
  }
  & a{
    text-decoration: none;
  }
  @media (max-width: 850px) {
    width: 100%;
  }
  width: 40%;
`
const Wrapp = styled.div`
  overflow: auto;
  position:relative;
  float:left;
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 300px;
  transition: all .3s ease-in-out;
  &:hover div{
      opacity: 1;
  }
  @media(max-width: 850px){
      width:100%;
  }
`

const Text = styled.div`
  width: 100%;
  background-color: rgba(0,0,0,.5);
  opacity: 0;
  height: 300px;
  text-align: center;
  display: flex; 
  flex-direction: column;
  justify-content: center;
`
const P = styled.p`
  background-color: initial;
  color: white;
`
const selectImage = (image) =>{
    switch(image) {
        case 'bulldog':
            return bulldog;
        case 'observatorio':
            return observatorio;
        default:
            return observatorio;
    }
}
const Projects = (props) => {
    var image = selectImage(props.image);
    return (
        <Wrapper>
            <h2>{props.title}</h2>
            <a target="_blank" href={props.url}>
            <Wrapp image={image}>
                <Text>
                    <P>{props.text}</P> 
                </Text>
            </Wrapp>
            </a>
        </Wrapper>
    );
};

export default Projects;