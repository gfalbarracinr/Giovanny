import React from 'react'
import styled from 'styled-components'
import Title from './Title';
import Item from '../container/Item';

const Wrapper = styled.div`
  grid-area: experience;
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

const Experience = (props) => {
      const {jobs, title} = props 
      console.log(jobs)
      return(
        <Wrapper>
          <Wrapp>
            <Title title={title}/>
            <Item items={jobs}/>
          </Wrapp>
        </Wrapper>
      )
}

export default Experience;
