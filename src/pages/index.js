import React from 'react'
import Education from '../components/education';

const IndexPage = ({data}) =>{
  const courses = data.allEducationJson.edges;
  const firstCourse = courses.shift();
  const lastCourse = courses.pop();
  return(
  <Education firstCourse = { firstCourse.node } lastCourse = { lastCourse.node } courses = { courses }/>
  )
}

export default IndexPage
export const query = graphql`
  query TitleQuery {
    allEducationJson{
      edges{
        node{
          year
          institution
          degree{
            career
            description
          }
        }
      }
    }
  }
`