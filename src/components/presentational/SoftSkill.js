import React from 'react'
import styled from 'styled-components'
import Title from './Title';
import Skill from './Skill';

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

const Skills = styled.div`
  margin-top: 5%;
  width: 100%;
  min-height: 10px;
  display: flex;
  flex-direction: column;
  padding-left: 10%;
`

const SoftSkill = ({ softSkills, title }) => {

  return(
    <Wrapper>
      <Wrapp>
        <Title title={title} width="30%" margin="5%" h="3"/>
      </Wrapp>
      <Skills>
        {
          softSkills.map((skill, index) =>(
            <Skill key = { index } name = { skill.node.skill } percentage = { skill.node.percentage }/>
          ))
        }
      </Skills>
    </Wrapper>
    
  )
}

export default SoftSkill
