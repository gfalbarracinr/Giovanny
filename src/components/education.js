import React, { Component } from 'react'
import styled from 'styled-components'
import Course from './course';
import SecondCourse from './secondCourse';
import LastCourse from './lastCourse';
import Collapse from '@material-ui/core/Collapse'

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
const Education = styled.div`
  display: flex;
  flex-direction: column;

`

const Title = styled.div`
 margin-left: 10%;
 display: flex;
 cursor: pointer;
 
 
 & > hr{
   background-color: #190D0E;
   width: 60%;
   color: #190D0E;
   margin-left: 10%;
   margin-top: 2%;
   border: 1px solid #190D0E;
 }
`


class IndexPage extends Component {
    constructor(props){
      super(props)
      this.state = {
        visible: true
      }
    }
    handleClick = () =>{
      this.setState(state => ({ visible: !state.visible}))
    }
    render(){
      const {firstCourse, lastCourse, courses} = this.props 
      return(
        <Wrapper>
          <Education>
            <Title onClick={this.handleClick}>
              <h2>EDUCACIÓN</h2>
              <hr/>
            </Title>
            <Collapse in={this.state.visible}>
            <Course year={firstCourse.year} institution={firstCourse.institution} degree={firstCourse.degree}/>
            {          
              courses.map((course, index) => (
                <SecondCourse key={ index } year={course.node.year} institution={course.node.institution} degree={course.node.degree}/>
              ))
              
            }
            <LastCourse year={lastCourse.year} institution={lastCourse.institution} degree={lastCourse.degree}/>
            </Collapse>
          </Education>
        </Wrapper>
      )
    }
}

export default IndexPage
