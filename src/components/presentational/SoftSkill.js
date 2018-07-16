import React from 'react'
import styled from 'styled-components'
import Title from './Title';


const Wrapper = styled.div`
  grid-area: softSkill;
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

const SoftSkill = () => {

  return(
    <Wrapper>
      <Wrapp>
        <Title title="HABILIDADES PERSONALES" width="30%" margin="5%" h="3"/>
      </Wrapp>
    </Wrapper>
    
  )
}

export default SoftSkill
