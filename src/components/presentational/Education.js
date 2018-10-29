import React from 'react'
import styled from 'styled-components'
import Title from './Title';
import Item from '../container/Item';

const Wrapper = styled.div`
  grid-area: education;
  margin-bottom: 1.45rem;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 400px) {
    margin-left: 0;
    margin-top:0;
  }
`
const Wrapp = styled.div`
  display: flex;
  flex-direction: column;

`

const Education = (props) =>{

  const {courses} = props 
  return(
    <Wrapper>
      <Wrapp>
        <Title title="EDUCACIÓN" h="2"/>
        <Item items={courses}/>
      </Wrapp>
    </Wrapper>
  )
}

export default Education
