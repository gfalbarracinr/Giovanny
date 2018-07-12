import React from 'react'
import styled from 'styled-components'
import Course from '../components/course';
import SecondCourse from '../components/secondCourse';
import LastCourse from '../components/lastCourse';

const Wrapper = styled.div`
  grid-area: education;
  margin-bottom: 1.45rem;
  margin-left: 5%;
  margin-right: 5%;
  @media (max-width: 400px) {
    margin-left: 0;
  }
`
const Education = styled.div`
  display: flex;
  flex-direction: column;

`

const Title = styled.div`
 margin-left: 10%;
 display: flex;
 
 
 & > hr{
   background-color: #190D0E;
   width: 60%;
   color: #190D0E;
   margin-left: 10%;
   margin-top: 2%;
   border: 1px solid #190D0E;
 }
`

const IndexPage = () => (
  <Wrapper>
    <Education>
      <Title>
        <h2>EDUCACIÓN</h2>
        <hr/>
      </Title>
      <Course/>
      <SecondCourse/>
      <LastCourse/>
    </Education>
  </Wrapper>
)

export default IndexPage
