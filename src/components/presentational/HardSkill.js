import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import BubbleChart from '../container/BubbleChart';

const Wrapper = styled.div`

  grid-area: hardSkill;
  margin-bottom: 1.45rem;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;

  @media (max-width: 400px) {
    margin-left: 0;
    margin-top:0;
}

`
const refactorArray = (arr) =>{
    let aux=[]
    arr.map(data =>{
        aux.push(data.node)
    })
    return aux;
}
const HardSkill = (props) => {
    const finalArray = refactorArray(props.hardSkills)
    return (
        <Wrapper>
            <Title title={props.title} width="30%" margin="5%" h="3"/>
            <BubbleChart data = { finalArray }/>
        </Wrapper>
    );
};

export default HardSkill;